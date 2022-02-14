import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';

import RSP from './6_RSP';

const HotComponent = hot(RSP);

ReactDOM.render(<HotComponent />, document.querySelector('#root'));
