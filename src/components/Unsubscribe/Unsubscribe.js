import React, { Component } from 'react';
import axios from 'axios';

class Unsubscribe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formValue: ''
    };
  }

  handleChange = event => {
    this.setState({ formValue: event.target.value });
  };

  handleSubmit = () => {
    axios
      .post('https://frameworkstash-api.herokuapp.com/v1/unsubscribe', {
        email: this.state.formValue
      })
      .then(res => {
        alert('Sorry to see you go, you can always resubscirbe!');
      })
      .catch(err => {
        alert('Email not found');
      });
    this.setState({ formValue: '' });
  };

  render() {
    return (
      <div
        className="jumbotron jumbotron-fluid text-center alert-dismissible fade show"
        role="alert"
      >
        <button
          onClick={this.handleSubscriptionDismissal}
          type="button"
          className="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
        <div className="container">
          <h3>Enter your email address below to unsubscribe.</h3>
          <form onSubmit={this.handleSubmit} className="form-inline">
            <div className="form-group mx-auto">
              <input
                onChange={this.handleChange}
                type="email"
                className="form-control mb-2 mr-sm-2 mb-sm-0"
                id="inlineFormInputName2"
                value={this.state.formValue}
                placeholder="Email"
              />

              <button type="submit" className="btn btn-primary">
                Unsubscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Unsubscribe;
