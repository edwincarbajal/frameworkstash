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

  handleOnClick = event => {
    axios
      .get(`http://localhost:3001/v1/frameworks/${event.target.id}/tutorials`)
      .then(response => {
        this.setState({ tutorials: response.data });
      })
      .catch(errors => {
        console.log(errors);
      });
  };

  render() {
    return (
      <div className="container">
        <SubscriptionForm />
        <CollectionsContainer handleOnClick={this.handleOnClick} />
      </div>
    );
  }
}

export default App;
