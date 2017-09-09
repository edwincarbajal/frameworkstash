import React from 'react';
import { Link } from 'react-router';

const Collection = props => {
  const totalTutorialsHelper = number => {
    return number > 1 ? `${number} tutorials` : `${number} tutorial`;
  };

  return (
    <div className="col-md-4">
      <div className="card">
        <div className="card-body">
          <Link to={`/${props.title}/tutorials`}>
            <h4
              id={props.id}
              className="card-title"
              onClick={props.handleOnClick}
            >
              {props.title}
            </h4>
          </Link>
          <p className="card-text">{props.description}</p>
          <p className="card-text">
            <small className="text-muted">
              {totalTutorialsHelper(props.total_tutorials)}
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Collection;
