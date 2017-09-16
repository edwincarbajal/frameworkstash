import React, { Component } from 'react';

import SubscriptionForm from '../SubscriptionForm/SubscriptionForm';
import CollectionsContainer from '../CollectionsContainer/CollectionsContainer';

// import TrendingContainer from '../TrendingContainer/TrendingContainer';
// import FeaturedContainer from '../FeaturedContainer/FeaturedContainer';

class Home extends Component {
  // subscribedCheck = () => {
  //   if (localStorage.getItem('subscribed') === 'true') {
  //     return (
  //       <div>
  //         <TrendingContainer />
  //         <FeaturedContainer />
  //       </div>
  //     );
  //   } else {
  //     return <SubscriptionForm />;
  //   }
  // };

  render() {
    return (
      <div>
        {/* {this.subscribedCheck()} */}
        <SubscriptionForm />
        <CollectionsContainer />
      </div>
    );
  }
}
export default Home;
