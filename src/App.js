import React, { Component } from 'react';
import axios from 'axios';
// import './App.css';
import Navbar from './components/Navbar/Navbar';
import SubscriptionForm from './components/SubscriptionForm/SubscriptionForm';
import CollectionsContainer from './components/CollectionsContainer/CollectionsContainer';
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
    console.log(localStorage.getItem('frameworkId'));
  };

  render() {
    return (
      <div className="container">
        <SubscriptionForm />
        <CollectionsContainer handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
