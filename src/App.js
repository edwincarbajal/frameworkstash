import React, { Component } from 'react';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tutorials: []
    };
  }

  handleClick = event => {
    event.preventDefault();
    localStorage.setItem(
      'frameworkId',
      JSON.stringify([`${event.target.innerHTML}`, `${event.target.id}`])
    );
  };

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

export default App;
