import React, { Component } from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import Modal from 'react-modal';

import './Navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      name: '',
      email: '',
      topic: '',
      description: ''
    };
  }

  handleNameChange = event => {
    const name = event.target.value;
    this.setState({ name });
  };

  handleEmailChange = event => {
    const email = event.target.value;
    this.setState({ email });
  };

  handleTopicChange = event => {
    const topic = event.target.value;
    this.setState({ topic });
  };

  handleDescriptionChange = event => {
    const description = event.target.value;
    this.setState({ description });
  };

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  clearState = () => {
    this.setState({
      name: '',
      email: '',
      topic: '',
      description: ''
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    axios
      .post(`http://localhost:3001/v1/send`, {
        name: this.state.name,
        email: this.state.email,
        topic: this.state.topic,
        description: this.state.description
      })
      .then(response => {
        this.clearState();
      })
      .catch(err => {
        this.clearState();
      });
    this.closeModal();
  };

  render() {
    return (
      <nav className="navbar navbar-light">
        <Link to="/" className="navbar-brand">
          <img
            src="https://cdn.worldvectorlogo.com/logos/react-1.svg"
            width="30"
            height="30"
            className="logo d-inline-block align-top"
            alt=""
          />
          frameworkstash
          <small className="text-muted">
            Directory of framework tutorials for all levels
          </small>
        </Link>
        <span className="navbar-text">
          <button
            onClick={this.openModal}
            type="button"
            className="btn btn-outline-primary btn-sm"
          >
            <i className="fa fa-plus" aria-hidden="true" /> Request a Tutorial
          </button>
          <Modal
            className="modal-dialog"
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            contentLabel="Example Modal"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Request
                  </h5>
                </div>
                <div className="modal-body">
                  <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                      <label
                        htmlFor="message-text"
                        className="form-control-label"
                      >
                        Name:
                      </label>
                      <input
                        onChange={this.handleNameChange}
                        value={this.state.name}
                        className="form-control"
                        id="message-text"
                      />
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="message-text"
                        className="form-control-label"
                      >
                        Email:
                      </label>
                      <input
                        onChange={this.handleEmailChange}
                        className="form-control"
                        id="message-text"
                      />
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="recipient-name"
                        className="form-control-label"
                      >
                        Topic:
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="recipient-name"
                        onChange={this.handleTopicChange}
                      />
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="message-text"
                        className="form-control-label"
                      >
                        Description:
                      </label>
                      <textarea
                        onChange={this.handleDescriptionChange}
                        className="form-control"
                        id="message-text"
                      />
                    </div>
                    <div className="modal-footer">
                      <button
                        onClick={this.closeModal}
                        type="button"
                        className="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="submit" className="btn btn-primary">
                        Submit Request
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </Modal>
        </span>
      </nav>
    );
  }
}

export default Navbar;
