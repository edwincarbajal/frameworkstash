import React, { Component } from 'react';
import { Link } from 'react-router';
import axios from 'axios';

import SubscriptionForm from '../SubscriptionForm/SubscriptionForm';
import Tutorial from '../Tutorial/Tutorial';

import './TutorialsContainer.css';

var moment = require('moment');

class TutorialsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tutorials: []
    };
  }

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

  componentDidMount() {
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
  }

  render() {
    const frameworkArray = JSON.parse(
      '[' + localStorage.getItem('frameworkId') + ']'
    );
    const frameworkTitle = frameworkArray[0][0];

    return (
      <div>
        <div className="row">
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
              <div className="card-body">
                <h4 className="card-title">{frameworkTitle}</h4>
                <p className="framework-description card-text">
                  This is the React Description.
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
                likes={tutorial.likes.length}
                id={tutorial.id}
                date={moment(tutorial.date).format('dddd, MMMM Do YYYY')}
                fetchTutorials={this.fetchTutorials}
              />
            );
          })}
        </div>
        <SubscriptionForm />
      </div>
    );
  }
}

export default TutorialsContainer;
