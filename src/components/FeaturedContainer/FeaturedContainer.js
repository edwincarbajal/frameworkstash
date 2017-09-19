import React, { Component } from 'react';

import Featured from '../Featured/Featured';
import Tutorial from '../Tutorial/Tutorial';

import './FeaturedContainer.css';

var moment = require('moment');

const FeaturedContainer = props => {
  return (
    <div className="featured-tutorials-container row">
      <div className="col-md-12">
        <h4 className="collections-header">Featured Tutorials</h4>
      </div>
      {props.featuredTutorials.map(tutorial => {
        return (
          <Tutorial
            key={tutorial.id}
            title={tutorial.title}
            description={tutorial.description}
            author={tutorial.author}
            url={tutorial.url}
            likes={tutorial.total_likes}
            id={tutorial.id}
            date={moment(tutorial.created_at).format('MMM. D YYYY')}
            fetchTutorials={this.fetchTutorials}
          />
        );
      })}
    </div>
  );
};

export default FeaturedContainer;
