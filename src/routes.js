import React from 'react';
import { IndexRoute, Router, Route, hashHistory } from 'react-router';

import App from './App';
import Home from './components/Home/Home';
import TutorialsContainer from './components/TutorialsContainer/TutorialsContainer';
import NotFound from './components/NotFound/NotFound';
import About from './components/About/About';
import Unsubscribe from './components/Unsubscribe/Unsubscribe';

const Routes = props => (
  <Router
    {...props}
    onUpdate={() => window.scrollTo(0, 0)}
    history={hashHistory}
  >
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/:framework/tutorials" component={TutorialsContainer} />
      <Route path="/about" component={About} />
      <Route path="/unsubscribe" component={Unsubscribe} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);

export default Routes;
