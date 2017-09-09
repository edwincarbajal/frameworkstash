import React, { Component } from 'react';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

class Layout extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Layout;
