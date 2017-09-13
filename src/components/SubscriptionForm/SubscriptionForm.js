import React, { Component } from 'react';
import axios from 'axios';
import './SubscriptionForm.css';

class SubscriptionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formValue: ''
    };
  }

  handleChange = event => {
    console.log(event.target.value);
    this.setState({ formValue: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    axios
      .post('http://localhost:3001/v1/subscribe', {
        email: this.state.formValue
      })
      .then(response => {
        alert('Thank you for subscribing!');
        this.setState({ formValue: '' });
      })
      .catch(err => {
        alert('Email already subscribed! Try another one!');
        this.setState({ formValue: '' });
      });
  };

  placeholderCheck = () => {};
  render() {
    return (
      <div className="jumbotron jumbotron-fluid text-center">
        <div className="container">
          <h3>Subscribe to get notitifed when we add new tutorials.</h3>
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
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SubscriptionForm;
