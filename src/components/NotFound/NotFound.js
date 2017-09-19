import React from 'react';
import { Link } from 'react-router';

const NotFound = () => {
  return (
    <div className="text-center">
      <p>
        Where are you going? Got lost? Click <Link to="/">here</Link> to go
        home!
      </p>
    </div>
  );
};

export default NotFound;
