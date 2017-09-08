import React, { Component } from 'react';
import Collection from '../Collection/Collection';

class CollectionsContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const collectionsArray = [
      {
        title: 'react',
        description: 'cool',
        tutorials: 12
      },
      {
        title: 'React Native',
        description: 'Mobile',
        tutorials: 10
      },
      {
        title: 'Ruby on Rails',
        description: 'You are on the rails',
        tutorials: 800
      }
    ];

    return (
      <div className="row">
        <div className="col-md-12">
          <h4 className="text-muted">Collections</h4>
          <div className="card-deck">
            {collectionsArray.map((collection, index) => {
              return <Collection collection={collection} key={index} />;
            })}
          </div>
        </div>
        <div className="col-md-12 text-center">
          <button type="button" className="btn btn-outline-secondary">
            Load More
          </button>
        </div>
      </div>
    );
  }
}

export default CollectionsContainer;
