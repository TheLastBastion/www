import React from 'react';
import ReactDOM from 'react-dom';
import Perf from 'react-addons-perf';


import registerServiceWorker from './registerServiceWorker';

import '../node_modules/normalize.css/normalize.css';
import './index.scss';

import App from './app/App';

window.Perf = Perf;

ReactDOM.render(
  React.createElement(App),
  document.getElementById('root'),
);
registerServiceWorker();
