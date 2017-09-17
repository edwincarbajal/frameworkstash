import React, { Component } from 'react';
import axios from 'axios';

import SubscriptionForm from '../SubscriptionForm/SubscriptionForm';
import CollectionsContainer from '../CollectionsContainer/CollectionsContainer';
import Tutorial from '../Tutorial/Tutorial';

var moment = require('moment');

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      featuredTutorials: []
    };
  }

  componentDidMount = () => {
    axios
      .get('http://localhost:3001/v1/tutorials/trending')
      .then(response => {
        this.setState({ featuredTutorials: response.data });
      })
      .catch(errors => {
        console.log(errors);
      });
  };
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
        {this.state.featuredTutorials.map(tutorial => {
          return (
            <Tutorial
              key={tutorial.id}
              title={tutorial.title}
              description={tutorial.description}
              author={tutorial.author}
              url={tutorial.url}
              likes={tutorial.total_likes}
              id={tutorial.id}
              date={moment(tutorial.date).format('MMM. D YYYY')}
              fetchTutorials={this.fetchTutorials}
            />
          );
        })}
      </div>
    );
  }
}
export default Home;
