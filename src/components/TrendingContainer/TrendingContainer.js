import React, { Component } from 'react';
import Trending from '../Trending/Trending';

class TrendingContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div>
          <Trending />
          Trending Container
        </div>
      </div>
    );
  }
}

export default TrendingContainer;
