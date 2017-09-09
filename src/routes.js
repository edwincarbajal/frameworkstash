import React from 'react';
import { Router, Route } from 'react-router';

import App from './App';
import Content from './Content';
import Footer from './components/Footer/Footer';
import Layout from './Layout';
// import About from './components/About';
// import NotFound from './components/NotFound';

const Routes = props => (
  <Layout>
    <Router {...props}>
      <Route path="/" component={App} />
      <Route component={Content} />
      <Route path="/:framework/tutorials" component={Footer} />
    </Router>
  </Layout>
);

export default Routes;
