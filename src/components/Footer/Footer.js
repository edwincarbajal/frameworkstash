import React from 'react';

import './footer.css';

const Footer = () => {
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
                <a className="nav-link active" href="#">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
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
};

export default Footer;
