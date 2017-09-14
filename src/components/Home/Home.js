import React, { Component } from 'react';

import SubscriptionForm from '../SubscriptionForm/SubscriptionForm';
import CollectionsContainer from '../CollectionsContainer/CollectionsContainer';
import TrendingContainer from '../TrendingContainer/TrendingContainer';

class MainView extends Component {
  subscribedCheck = () => {
    if (localStorage.getItem('subscribed') === 'true') {
      return <TrendingContainer />;
    } else {
      return <SubscriptionForm />;
    }
  };

  render() {
    return (
      <div>
        {this.subscribedCheck()}
        <CollectionsContainer />
      </div>
    );
  }
}
export default MainView;
