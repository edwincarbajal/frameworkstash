import React from 'react';

const Footer = () => {
  return (
    <footer className="row">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="media">
              <img className="d-flex mr-3" src="#" alt="" />
              <div className="media-body">
                frameworkstash is a directory of tutorials <br />made by
                developers for developers.
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
            <p className="text-muted">©frameworkstash 2017</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
