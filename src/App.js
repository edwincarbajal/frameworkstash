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
    console.log(event.currentTarget.content.value);
    localStorage.setItem(
      'frameworkId',
      JSON.stringify([`${event.target.name}`, `${event.target.id}`])
    );
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
