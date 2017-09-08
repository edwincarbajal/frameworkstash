import React, { Component } from 'react';
// import './App.css';
import Navbar from './components/Navbar/Navbar';
import SubscriptionForm from './components/SubscriptionForm/SubscriptionForm';
import CollectionsContainer from './components/CollectionsContainer/CollectionsContainer';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        <SubscriptionForm />
        <CollectionsContainer />
        <Footer />
      </div>
    );
  }
}

export default App;
