import React, { Component } from 'react';
import axios from 'axios';

import SubscriptionForm from '../SubscriptionForm/SubscriptionForm';
import CollectionsContainer from '../CollectionsContainer/CollectionsContainer';
import FeaturedContainer from '../FeaturedContainer/FeaturedContainer';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      featuredTutorials: []
    };
  }

  componentDidMount = () => {
    axios
      .get('https://frameworkstash-api.herokuapp.com/v1/tutorials/trending')
      .then(response => {
        this.setState({ featuredTutorials: response.data });
      })
      .catch(errors => {
        console.log(errors);
      });
  };

  render() {
    return (
      <div>
        <SubscriptionForm />
        <CollectionsContainer />
        <FeaturedContainer featuredTutorials={this.state.featuredTutorials} />
      </div>
    );
  }
}
export default Home;
