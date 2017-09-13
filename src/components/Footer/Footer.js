import React, { Component } from 'react';
import { Link } from 'react-router';
import Modal from 'react-modal';
import './Footer.css';

class Footer extends Component {
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
      <footer className="row">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="media">
                <img
                  src="https://cdn.worldvectorlogo.com/logos/react-1.svg"
                  width="30"
                  height="30"
                  className="logo d-inline-block align-top"
                  alt=""
                />
                <div className="media-body">
                  <a href="/">frameworkstash</a> is a directory of tutorials{' '}
                  <br />made by developers for developers.
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <ul className="nav float-right">
                <li className="nav-item">
                  <Link to="/about" className="nav-link active">
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <a onClick={this.openModal} className="nav-link" href="#">
                    Contact
                  </a>
                </li>
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
                          Contact Us
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
                              Subject:
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
                              Message:
                            </label>
                            <textarea
                              className="form-control"
                              rows="10"
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
                              Submit
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </Modal>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://github.com/frameworkstash"
                  >
                    Github
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-12 text-center">
              <p className="copyright text-muted">
                <i className="fa fa-copyright" aria-hidden="true" />{' '}
                frameworkstash 2017
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
