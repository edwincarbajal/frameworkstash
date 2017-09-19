import React, { Component } from 'react';
import axios from 'axios';

import Collection from '../Collection/Collection';

import './CollectionsContainer.css';

class CollectionsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: []
    };
  }

  componentDidMount = () => {
    axios
      .get('https://frameworkstash-api.herokuapp.com/v1/frameworks')
      .then(response => {
        this.setState({ collections: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleClick = event => {
    event.preventDefault();
    localStorage.setItem(
      'frameworkId',
      JSON.stringify([`${event.target.innerHTML}`, `${event.target.id}`])
    );
  };

  render() {
    return (
      <div id="collections-container" className="row">
        <div className="col-12">
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
                  handleClick={this.handleClick}
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
