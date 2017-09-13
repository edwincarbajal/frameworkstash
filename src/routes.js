import React from 'react';
import { Router, Route } from 'react-router';

import App from './App';
import Layout from './Layout';
import Content from './Content';
import TutorialsContainer from './components/TutorialsContainer/TutorialsContainer';
import Footer from './components/Footer/Footer';
import AboutUs from './components/AboutUs/AboutUs';
// import NotFound from './components/NotFound';

const Routes = props => (
  <Layout>
    <Router {...props}>
      <Route path="/" component={App} />
      <Route component={Content} />
      <Route path="/:framework/tutorials" component={TutorialsContainer} />
      <Route path="/about-us" component={AboutUs} />
    </Router>
  </Layout>
);

export default Routes;
