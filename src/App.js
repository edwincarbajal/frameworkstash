import React, { Component } from 'react';
// import './App.css';
import Navbar from './components/Navbar/Navbar';
import SubscriptionForm from './components/SubscriptionForm/SubscriptionForm';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        <SubscriptionForm />
      </div>
    );
  }
}

export default App;
