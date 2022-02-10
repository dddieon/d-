import * as React from 'react';
import { useRef, useState } from 'react';

function GuGuDan() {
    const [first, setFirst] = useState(Math.ceil(Math.random() * 9)) // 1에서 9까지 랜덤
    const [second, setSecond] = useState(Math.ceil(Math.random() * 9)) // 1에서 9까지 랜덤
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const inputEl = useRef<HTMLInputElement>(null); // input을 null이 아니라고 ---- 1

    const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => { // e 위에 커서올리면 ide에서 타입추론 해준다
        e.preventDefault();
        const input = inputEl.current;
        if (parseInt(value) === first * second) {
            setResult('정답');
            setFirst(Math.ceil(Math.random() * 9));
            setSecond(Math.ceil(Math.random() * 9));
            setValue('');
            input?.focus(); // input이 null이 아니라고 --- 2
        } else {
            setResult('땡');
            input?.focus();
        }
    }

    return (
        <>
            <div>{first} 곱하기 {second}는?</div>
            <form onSubmit={onSubmitForm}>
                <input 
                    ref={inputEl} 
                    type="text" 
                    value={value} 
                    onChange={e => setValue(e.target.value)}/>
            </form>
            <div>{result}</div>
        </>
    )
}

export default GuGuDan;