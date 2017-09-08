import React from 'react';

const Collection = props => {
  return (
    <div className="col-md-4">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">{props.collection.title}</h4>
          <p className="card-text">{props.collection.description}</p>
          <p className="card-text">
            <small className="text-muted">{`${props.collection
              .tutorials} tutorials available.`}</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Collection;
