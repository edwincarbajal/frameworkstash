import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { browserHistory } from 'react-router';

ReactDOM.render(
  <Routes history={browserHistory} />,
  document.getElementById('root')
);
