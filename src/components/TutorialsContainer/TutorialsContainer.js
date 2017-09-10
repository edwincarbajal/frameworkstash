import React, { Component } from 'react';
import { Link } from 'react-router';
import Tutorial from '../Tutorial/Tutorial';
import axios from 'axios';
var moment = require('moment');

class TutorialsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tutorials: []
    };
  }

  componentDidMount() {
    const frameworkId = JSON.parse(
      '[' + localStorage.getItem('frameworkId') + ']'
    )[0][1];
    axios
      .get(`http://localhost:3001/v1/frameworks/${frameworkId}/tutorials`)
      .then(response => {
        this.setState({ tutorials: response.data });
      })
      .catch(err => {
        console.log(err);
      });
    axios
      .get(`http://localhost:3001/v1/frameworks/${frameworkId}`)
      .then(response => {
        console.log(response);
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
      <div className="row">
        <div className="col-12">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Collections</Link>
            </li>
            <li className="breadcrumb-item active">{frameworkTitle}</li>
          </ol>
        </div>
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">{frameworkTitle}</h4>
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
        {this.state.tutorials.map(tutorial => {
          return (
            <Tutorial
              key={tutorial.id}
              title={tutorial.title}
              description={tutorial.description}
              author={tutorial.author}
              url={tutorial.url}
              likes={1234}
              date={moment(tutorial.date).format('dddd, MMMM Do YYYY')}
            />
          );
        })}
      </div>
    );
  }
}

export default TutorialsContainer;
