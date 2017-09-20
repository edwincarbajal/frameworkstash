import React, { Component } from 'react';
import axios from 'axios';

import './Tutorial.css';

class Tutorial extends Component {
  handleClick = event => {
    event.preventDefault();
    const likes = JSON.parse(localStorage.getItem('likedTutorials')) || [];
    if (!likes.includes(`${this.props.id}`)) {
      axios
        .get(
          `https://frameworkstash-api.herokuapp.com/v1/tutorials/${this.props
            .id}/like`
        )
        .then(() => {
          this.props.fetchTutorials();
          likes.push(`${this.props.id}`);
          localStorage.setItem('likedTutorials', JSON.stringify(likes));
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  hasUserLiked = id => {
    const parsedLikes =
      JSON.parse(localStorage.getItem('likedTutorials')) || [];
    if (parsedLikes) {
      const likedTutorials = parsedLikes.map(id => {
        return parseInt(id, 10);
      });
      return likedTutorials.includes(id) && 'bg-liked';
    }
  };

  render() {
    return (
      <div className="col-12">
        <ul className="list-group">
          <li
            id={this.props.id}
            className={`list-group-item ${this.props.fetchTutorials &&
              this.hasUserLiked(this.props.id)}`}
          >
            <div className="media">
              <button
                onClick={this.handleClick}
                type="button"
                className="like-btn btn btn-light"
              >
                <i className="fa fa-arrow-up" aria-hidden="true" />
                <br />
                <small className="text-muted"> {this.props.likes}</small>
              </button>
              <div className="media-body">
                <a href={this.props.url} target="_blank">
                  {this.props.title}
                </a>
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
