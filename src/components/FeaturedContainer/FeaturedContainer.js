import React, { Component } from 'react';
import Featured from '../Featured/Featured';

class FeaturedContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div>
          Featured Container
          {/* <Featured /> */}
        </div>
      </div>
    );
  }
}

export default FeaturedContainer;
