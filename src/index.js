import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory } from 'react-router';

import Routes from './routes';

import './index.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import 'devicon/devicon.min.css';

// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Routes history={hashHistory} />,
  document.getElementById('root')
);
