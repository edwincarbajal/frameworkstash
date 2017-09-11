import React from 'react';
import { Link } from 'react-router';
import { Modal } from 'react-modal';

import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-light">
      <a className="navbar-brand" href="#">
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
      </a>
      <span className="navbar-text">
        <button type="button" className="btn btn-outline-primary btn-sm">
          <i className="fa fa-plus" aria-hidden="true" />
          <Link to="#"> Request a Tutorial</Link>
        </button>
      </span>
    </nav>
  );
};

export default Navbar;
