import React from 'react';
import { IndexRoute, Router, Route } from 'react-router';

import App from './App';
import Home from './components/Home/Home';
import TutorialsContainer from './components/TutorialsContainer/TutorialsContainer';
import About from './components/About/About';

const routes = props => (
  <Router {...props}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/:framework/tutorials" component={TutorialsContainer} />
      <Route path="/about" component={About} />
    </Route>
  </Router>
);

export default routes;
