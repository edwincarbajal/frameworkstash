import React, { Component } from 'react';

class SubscriptionForm extends Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h3>Subscribe to get notitifed when we add new tutorials.</h3>
          <form className="form-inline">
            <input
              type="text"
              className="form-control mb-2 mr-sm-2 mb-sm-0"
              id="inlineFormInputName2"
              placeholder="Email"
            />
            <button type="submit" className="btn btn-primary">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default SubscriptionForm;
