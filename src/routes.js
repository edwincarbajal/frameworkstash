import React from 'react';
import { IndexRoute, Router, Route, hashHistory } from 'react-router';

import App from './App';
import Home from './components/Home/Home';
import TutorialsContainer from './components/TutorialsContainer/TutorialsContainer';
import NotFound from './components/NotFound/NotFound';
import About from './components/About/About';

const routes = props => (
  <Router {...props} history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/:framework/tutorials" component={TutorialsContainer} />
      <Route path="/about" component={About} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);

export default routes;
