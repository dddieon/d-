import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';

import ResponseCheck from './5_ResponseCheck';

const HotComponent = hot(ResponseCheck);

ReactDOM.render(<HotComponent />, document.querySelector('#root'));