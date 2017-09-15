import React, { Component } from 'react';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div
        className={
          this.props.location.pathname === '/about' ? (
            'container-fluid'
          ) : (
            'container'
          )
        }
      >
        <Navbar />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default App;
