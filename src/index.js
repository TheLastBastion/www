import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';

import '../node_modules/normalize.css/normalize.css';
import './index.scss';

import app from './app';

ReactDOM.render(
  React.createElement(app),
  document.getElementById('root'),
);
registerServiceWorker();
