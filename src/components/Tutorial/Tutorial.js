import React, { Component } from 'react';
import { Link } from 'react-router';
import axios from 'axios';

class Tutorial extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = event => {
    event.preventDefault();
    const likes = JSON.parse(localStorage.getItem('likedTutorials')) || [];
    if (!likes.includes(`${this.props.id}`)) {
      axios
        .get(`http://localhost:3001/v1/tutorials/${this.props.id}/like`)
        .then(response => {
          this.props.fetchTutorials();
        })
        .catch(err => {
          console.log(err);
        });
      likes.push(`${this.props.id}`);
      localStorage.setItem('likedTutorials', JSON.stringify(likes));
    }
  };

  render() {
    return (
      <div className="col-12">
        <ul className="list-group">
          <li className="list-group-item">
            <div className="media">
              <button
                onClick={this.handleClick}
                type="button"
                className="btn btn-light"
              >
                <i className="fa fa-arrow-up" aria-hidden="true" />
                <br />
                <small className="text-muted"> {this.props.likes}</small>
              </button>
              <div className="media-body">
                <Link to="http://www.google.com">{this.props.title}</Link>
                <br />
                <small className="text-muted">
                  Author: {this.props.author}
                </small>
                <br />
                <small>{this.props.description}</small>
                <span className="float-right">{this.props.date}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Tutorial;
