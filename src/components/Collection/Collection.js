import React from 'react';
import { Link } from 'react-router';

import './collection.css';

const Collection = props => {
  const totalTutorialsHelper = number => {
    return number > 1 ? `${number} tutorials` : `${number} tutorial`;
  };

  return (
    <div id={props.title} className="col-md-4" onClick={props.handleClick}>
      <div className="card">
        <div className="card-header">
          <Link to={`/${props.title}/tutorials`}>
            <h4 content={props.title} id={props.id} className="card-title">
              {props.title}
            </h4>
          </Link>
        </div>
        <div className="card-body">
          <p className="framework-description card-text text-truncate">
            {props.description}
          </p>
          <p className="card-text">
            <small className="framework-total text-muted">
              {totalTutorialsHelper(props.total_tutorials)}
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Collection;
