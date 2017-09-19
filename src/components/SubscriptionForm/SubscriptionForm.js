import React, { Component } from 'react';
import axios from 'axios';

import './SubscriptionForm.css';

class SubscriptionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formValue: '',
      subscriptionVisible: true
    };
  }

  componentWillMount = () => {
    const session = sessionStorage.getItem('subscriptionVisible')
      ? false
      : true;
    this.setState({ subscriptionVisible: session });
  };

  handleChange = event => {
    this.setState({ formValue: event.target.value });
  };

  handleSubmit = event => {
    if (this.state.formValue) {
      axios
        .post('http://localhost:3001/v1/subscribe', {
          email: this.state.formValue
        })
        .then(response => {
          console.log(response);
          alert(`${this.state.formValue} is now subscribed!`);
          this.setState({ formValue: '' });
          localStorage.setItem('subscribed', true);
        })
        .catch(err => {
          alert(`${this.state.formValue} is already subscribed. Try another!`);
          this.setState({ formValue: '' });
        });
    } else {
      console.log(this.state.formValue);
    }
  };

  handleSubscriptionDismissal = () => {
    sessionStorage.setItem('subscriptionVisible', false);
    this.setState(prevState => ({
      subscriptionVisible: !prevState.subscriptionVisible
    }));
  };

  render() {
    if (this.state.subscriptionVisible) {
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
            <h3>Subscribe to get notified when new tutorials are added.</h3>
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
    return <div />;
  }
}

export default SubscriptionForm;
