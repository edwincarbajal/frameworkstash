import React from 'react';

import './About.css';

const About = () => {
  return (
    <div>
      <div className="row">
        <div className="col-12 text-center">
          <h3>Our vision is simple</h3>
          <p>A community driven directory of tutorials for developers</p>
        </div>
      </div>
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
          <h2>Technologies we used</h2>
          <div className="row">
            <div className="col-md-3">React placeholder</div>
            <div className="col-md-3">React Router placeholder</div>
            <div className="col-md-3">Rails placeholder</div>
            <div className="col-md-3">Bootstrap placeholder</div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 text-center">
          <h2>Meet the Team</h2>
        </div>
        <div className="col-12">
          <div className="row">
            <div className="col-md-6">
              <div className="media">
                <img
                  className="d-flex mr-3"
                  src="..."
                  alt="Generic placeholder image"
                />
                <div className="media-body">
                  <h5 className="mt-0">Edwin Carbajal</h5>
                  Entrepreneur 🚀 | Software Engineer
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <a href="https://linkedin.com/in/edwincarbajal">
                        LinkedIn
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="https://github.com/edwincarbajal">Github</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="https://twitter.com/edwinxcarbajal">Twitter</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="media">
                <img
                  className="d-flex mr-3"
                  src="..."
                  alt="Generic placeholder image"
                />
                <div className="media-body">
                  <h5 className="mt-0">Teddy Koomen</h5>
                  Web Developer 💻 | Jiu Jitsu Champion 🏆
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <a href="https://www.linkedin.com/in/theodoruskoomen/">
                        LinkedIn
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="https://github.com/Ted-Koomen">Github</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="https://twitter.com/Ted_Koomen">Twitter</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
