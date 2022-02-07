import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';

import WordRelay from './3_WordRelay';

const HotComponent = hot(WordRelay);

ReactDOM.render(<HotComponent />, document.querySelector('#root'));