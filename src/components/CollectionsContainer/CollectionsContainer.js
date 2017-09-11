import React, { Component } from 'react';
import axios from 'axios';

import Collection from '../Collection/Collection';

import collectionscontainer from './collectionscontainer.css';

class CollectionsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: []
    };
  }

  componentDidMount = () => {
    axios
      .get('http://localhost:3001/v1/frameworks')
      .then(response => {
        console.log(response);
        this.setState({ collections: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div id="collections-container" className="row">
        <div className="col-md-12">
          <h4 className=" collections-header">Collections</h4>
          <div className="card-deck">
            {this.state.collections.map(collection => {
              return (
                <Collection
                  key={collection.id}
                  id={collection.id}
                  description={collection.description}
                  title={collection.title}
                  total_tutorials={collection.total_tutorials}
                  handleClick={this.props.handleClick}
                />
              );
            })}
          </div>
        </div>
        {/* <div className="col-md-12 text-center">
          <button type="button" className="btn btn-outline-secondary">
            Load More
          </button>
        </div> */}
      </div>
    );
  }
}

export default CollectionsContainer;
