import React from 'react';

import './About.css';

const About = () => {
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-8 col-sm-12 text-center">
          <h2>Why we created frameworkstash?</h2>
          <p>
            As graduates of Dev Bootcamp, we realize the impact community has on
            the learning process. The goal of frameworkstash is to be the hub
            for all of those who want to learn the most cutting edge frameworks
            within a community that supports its self; gathering tutorials from
            outside resources, and curating its own.
          </p>
          <p>
            The passion for helping others is why we created frameworkstash!
          </p>
          <p>
            We are also passionate in the community having a voice. Anyone, not
            only registered users can request tutorials that they would like to
            see, or subscribe to a newsletter to be notified of the new
            tutorials that we post. We hope you enjoy it, happy coding!
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-12 text-center">
          <h1>Technologies we used</h1>
        </div>
      </div>
    </div>
  );
};

export default About;
