import * as React from 'react'
import { TryInfo } from '../types';

const Try: React.FunctionComponent<{tryInfo: TryInfo}> = ({tryInfo}) => { // props 타입정의
  return (
    <li>
        <div>{tryInfo.try}</div>
        <div>{tryInfo.result}</div>
    </li>
  )
}

export default Try;