//snippet: tsrfc
import * as React from 'react';
import { useState, useRef, useCallback } from 'react';

interface Props {}

export default function ResponseCheck({}: Props) {
  const [state, setState] = useState('waiting');
  const [message, setMessage] = useState('클릭해서 시작하세요.');
  const [result, setResult] = useState<number[]>([]); // 빈 배열은 타입이 잘 안잡히니 제너릭
  const timeout = useRef<number | null>(null);
  // * ref는 RefObject 또는 MutableRefObject를 리턴한다 (오버로딩 되어있음)
  // * generic이 있고 매개변수가 null이 아니면 MutableRefObject이다
  // * MutableRefObject는 readonly가 아니어서 current를 바꿀 수 있다

  const startTime = useRef(0);
  const endTime = useRef(0);

  const onClickScreen = () => {
    if (state === 'waiting') {
      timeout.current = window.setTimeout(() => {
        // * window. 를 붙이지 않으면 NodeJS.Timeout를 리턴한다
        setState('now');
        setMessage('지금 클릭');
        startTime.current = new Date().getTime();
      }, Math.floor(Math.random() * 1000) + 2000);
      setState('ready');
      setMessage('초록색이 되면 클릭하세요.');
    } else if (state === 'ready') {
      clearTimeout(timeout.current!);
      setState('waiting');
      setMessage('너무 성급하시군요! 초록색이 된 후에 클릭하세요.');
    } else if (state === 'now') {
      endTime.current = new Date().getTime();
      setState('waiting');
      setMessage('클릭해서 시작하세요.');
      setResult(prevResult => {
        return [...prevResult, endTime.current - startTime.current];
      });
    }
  };

  const onReset = () => {
    setResult([]);
  };

  const renderAverage = () => {
    return result.length === 0 ? null : (
      <>
        <div>평균 시간: {result.reduce((a, c) => a + c) / result.length}ms</div>
        <button onClick={onReset}>리셋</button>
      </>
    );
  };
  return (
    <>
      <div id="screen" className={state} onClick={onClickScreen}>
        {message}
      </div>
      {renderAverage()}
    </>
  );
}
