import React from 'react';
import { Link } from 'react-router';
const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <img
          src="#"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt=""
        />
        frameworkstash
        <br />
        <small className="text-muted">
          Directory of framework tutorials for all levels
        </small>
      </a>
      <span className="navbar-text">
        <Link to="#">Submit a Tutorial</Link>
      </span>
    </nav>
  );
};

export default Navbar;
