import React, { Component } from 'react';
import { Link } from 'react-router';
import axios from 'axios';

import Tutorial from '../Tutorial/Tutorial';

import './TutorialsContainer.css';

var moment = require('moment');

class TutorialsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tutorials: [],
      description: ''
    };
  }

  componentDidMount() {
    const frameworkId = JSON.parse(
      '[' + localStorage.getItem('frameworkId') + ']'
    )[0][1];
    axios
      .get(
        `https://frameworkstash-api.herokuapp.com/v1/frameworks/${frameworkId}/tutorials`
      )
      .then(response => {
        this.setState({
          tutorials: response.data,
          description: response.data[0].framework.description
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentWillUnmount = () => {
    this.setState({ description: '' });
  };

  fetchTutorials = () => {
    const frameworkId = JSON.parse(
      '[' + localStorage.getItem('frameworkId') + ']'
    )[0][1];
    axios
      .get(
        `https://frameworkstash-api.herokuapp.com/v1/frameworks/${frameworkId}/tutorials`
      )
      .then(response => {
        this.setState({ tutorials: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  tutorialTitleHelper = title => {
    return title
      .toLowerCase()
      .split(' ')
      .join('-');
  };

  render() {
    const frameworkArray = JSON.parse(
      '[' + localStorage.getItem('frameworkId') + ']'
    );
    const frameworkTitle = frameworkArray[0][0];

    return (
      <div>
        <div className="tutorials-container row">
          <div className="col-12">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Collections</Link>
              </li>
              <li className="breadcrumb-item active">{frameworkTitle}</li>
            </ol>
          </div>
          <div className="tutorial-framework-col col-12">
            <div className="card">
              <div
                className={`card-body ${this.tutorialTitleHelper(
                  frameworkTitle
                )}`}
              >
                <h4 className="card-title">{frameworkTitle}</h4>
                <p className="framework-description card-text">
                  {this.state.description}
                </p>
              </div>
            </div>
          </div>
          <div className="col-12">
            <ul className="title-headers list-inline">
              <li className="font-weight-bold list-inline-item">
                <h6>Tutorial Title</h6>
              </li>
              <li className="font-weight-bold list-inline-item float-right">
                <h6>Date</h6>
              </li>
            </ul>
          </div>
          {this.state.tutorials.map(tutorial => {
            return (
              <Tutorial
                key={tutorial.id}
                title={tutorial.title}
                description={tutorial.description}
                author={tutorial.author}
                url={tutorial.url}
                likes={tutorial.total_likes}
                id={tutorial.id}
                date={moment(tutorial.created_at).format('MMM. D YYYY')}
                fetchTutorials={this.fetchTutorials}
              />
            );
          })}
        </div>
        <div className="row">
          <div className="col-12">
            <div className="sticky-footer-newsletter fixed-bottom text-white">
              <form className="form-inline justify-content-center">
                <span>
                  Get the newest <strong> {frameworkTitle} </strong> tutorials
                  in your inbox
                </span>
                <div className="form-group mx-sm-3">
                  <input
                    type="text"
                    className="form-control-plaintext"
                    id="staticEmail2"
                    placeholder=" Your email"
                  />
                </div>
                <button type="submit" className="btn btn-dark text-uppercase">
                  Notify me
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TutorialsContainer;
