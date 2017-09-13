import React, { Component } from 'react';
import { Link } from 'react-router';

import Modal from 'react-modal';

import './Navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  handleSubmit = event => {
    event.preventDefault();
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
                      <input className="form-control" id="message-text" />
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="message-text"
                        className="form-control-label"
                      >
                        Email:
                      </label>
                      <input className="form-control" id="message-text" />
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
                      />
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="message-text"
                        className="form-control-label"
                      >
                        Description:
                      </label>
                      <textarea className="form-control" id="message-text" />
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
