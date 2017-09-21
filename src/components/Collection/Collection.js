import React from 'react';
import { Link } from 'react-router';

import './Collection.css';

const Collection = props => {
  const totalTutorialsHelper = number => {
    return number > 1 ? `${number} tutorials` : `${number} tutorial`;
  };

  const tutorialTitleHelper = title => {
    return title
      .toLowerCase()
      .split(' ')
      .join('-');
  };

  const imageHelper = title => {
    if (title.match(/react/)) {
      return 'devicon-react-original colored';
    } else if (title.match(/rails/)) {
      return 'devicon-rails-plain colored';
    }
  };

  return (
    <div
      id={props.title}
      className="framework-col col-xs-12 col-md-6 col-xl-4"
      onClick={props.handleClick}
    >
      <div className="card">
        <div className={`card-header ${tutorialTitleHelper(props.title)}`}>
          <i
            className={`framework-icon ${imageHelper(
              tutorialTitleHelper(props.title)
            )}`}
          />
          <Link to={`/${tutorialTitleHelper(props.title)}/tutorials`}>
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
