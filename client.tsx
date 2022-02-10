import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';

import NumberBaseball from './4_NumberBaseball';

const HotComponent = hot(NumberBaseball);

ReactDOM.render(<HotComponent />, document.querySelector('#root'));