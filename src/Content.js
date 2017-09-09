import React, { Component } from 'react';
import SubscriptionForm from './components/SubscriptionForm/SubscriptionForm';
import CollectionsContainer from './components/CollectionsContainer/CollectionsContainer';

class Content extends Component {
  render() {
    return (
      <div>
        <SubscriptionForm />
        <CollectionsContainer />
      </div>
    );
  }
}
export default Content;
