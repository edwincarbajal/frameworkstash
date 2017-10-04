import React from 'react';
import { render } from 'react-dom';
import { hashHistory } from 'react-router';

import Routes from './routes';

import ReactGA from 'react-ga';

import './index.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import 'devicon/devicon.min.css';

// import registerServiceWorker from './registerServiceWorker';

ReactGA.initialize('UA-107554017-1');

const logPageView = () => {
  ReactGA.set({ page: window.location.pathname + window.location.search });
  ReactGA.pageview(window.location.pathname + window.location.search);
};

render(
  <Routes history={hashHistory} onUpdate={logPageView} />,
  document.getElementById('root')
);
