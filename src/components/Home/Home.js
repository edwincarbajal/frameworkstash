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

  fetchTutorials = () => {
    axios
      .get(`https://frameworkstash-api.herokuapp.com/v1/tutorials/trending`)
      .then(response => {
        this.setState({ featuredTutorials: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <SubscriptionForm />
        <CollectionsContainer />
        <FeaturedContainer
          featuredTutorials={this.state.featuredTutorials}
          fetchTutorials={this.fetchTutorials}
        />
      </div>
    );
  }
}
export default Home;
