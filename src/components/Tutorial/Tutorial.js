import React from 'react';
import { Link } from 'react-router';

import './Tutorial.css';

const Tutorial = props => {
  return (
    <div className="col-12">
      <ul className="list-group">
        <li className="list-group-item">
          <div className="media">
            <button type="button" className="like-btn btn btn-light">
              <i className="fa fa-arrow-up" aria-hidden="true" />
              <br />
              <small className="text-muted"> 12312</small>
            </button>
            <div className="media-body">
              <Link to="http://www.google.com">{props.title}</Link>
              <br />
              <small>{props.description}</small>
              <br />
              <small className="text-muted">Author: {props.author}</small>
              <span className="float-right">{props.date}</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Tutorial;
