import React, { Component } from 'react';
import { Link } from 'react-router';

class TutorialsContainer extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-12">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Collections</Link>
            </li>
            <li className="breadcrumb-item active">React</li>
          </ol>
        </div>
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">React</h4>
              <p className="card-text">This is the React Description.</p>
            </div>
          </div>
        </div>
        <div className="col-12">
          <ul className="list-inline">
            <li className="list-inline-item">Tutorial Title</li>
            <li className="list-inline-item float-right">Date</li>
          </ul>
        </div>
        <div className="col-12">
          <ul className="list-group">
            <li className="list-group-item">
              <div className="media">
                <button type="button" className="btn btn-light">
                  <i className="fa fa-arrow-up" aria-hidden="true" />
                  <br />
                  <small className="text-muted"> 12312</small>
                </button>
                <div className="media-body">
                  <Link to="http://www.google.com">Cras justo odio</Link>
                  <br />
                  <small className="text-muted">Author: Bill Gates</small>
                  <br />
                  <small>Directory of framework tutorials for all levels</small>
                  <span className="float-right">09/09/2017</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default TutorialsContainer;
