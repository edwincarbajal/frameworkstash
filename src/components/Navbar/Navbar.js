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
      value: '',
      navCollapsed: false
    };
  }

  handleInputChange = event => {
    this.setState({ [event.target.id]: event.target.value });
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
      value: ''
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    axios
      .post(`https://frameworkstash-api.herokuapp.com/v1/send`, {
        name: this.state.name,
        email: this.state.email,
        topic: this.state.topic,
        value: this.state.value
      })
      .then(response => {
        this.clearState();
      })
      .catch(err => {
        this.clearState();
      });
    this.closeModal();
  };

  onToggleNav = () => {
    this.setState(prevState => ({
      navCollapsed: !prevState.navCollapsed
    }));
  };

  render() {
    const { navCollapsed } = this.state;
    return (
      <nav className="navbar navbar-light navbar-expand-lg">
        <Link to="/" className="navbar-brand">
          {/* <img
            src="https://cdn.worldvectorlogo.com/logos/react-1.svg"
            width="30"
            height="30"
            className="logo d-inline-block"
            alt=""
          /> */}
          frameworkstash
          <small className="text-muted">
            Directory of framework tutorials for all levels
          </small>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={this.onToggleNav}
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className={`${!navCollapsed && 'collapse'} navbar-collapse`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ml-auto">
            <button
              onClick={this.openModal}
              type="button"
              className="btn btn-outline-primary btn-sm"
            >
              <i className="fa fa-plus" aria-hidden="true" /> Request a Tutorial
            </button>
          </ul>
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
                        onChange={this.handleInputChange}
                        value={this.state.name}
                        className="form-control"
                        id="name"
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
                        onChange={this.handleInputChange}
                        className="form-control"
                        value={this.state.email}
                        id="email"
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
                        id="topic"
                        value={this.state.topic}
                        onChange={this.handleInputChange}
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
                        onChange={this.handleInputChange}
                        className="form-control"
                        id="value"
                        value={this.state.value}
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
        </div>
      </nav>
    );
  }
}

export default Navbar;
