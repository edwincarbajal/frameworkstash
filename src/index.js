import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { browserHistory } from 'react-router';
import Routes from './routes';
import 'bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

ReactDOM.render(
  <Routes history={browserHistory} />,
  document.getElementById('root')
);
