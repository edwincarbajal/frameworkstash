import React from 'react';

import './About.css';

import teddy from '../../assets/teddy.jpg';
import edwin from '../../assets/edwin.jpg';

const About = () => {
  return (
    <div>
      <div className="row">
        <div className="main-header col-12 text-center">
          <h3>Our vision is simple</h3>
          <p className="lead">
            A community driven directory of tutorials for developers
          </p>
          <span className="pointer" />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="main-body col-md-8 col-sm-12 text-center">
          <h2>Why we created frameworkstash?</h2>
          <p className="lead">
            As graduates of Dev Bootcamp, we realize the impact community has on
            the learning process. The goal of frameworkstash is to be the hub
            for all of those who want to learn the most cutting edge frameworks
            within a community that supports itself; gathering tutorials from
            outside resources, and curating its own.
          </p>
          <p className="standout lead">
            The passion for helping others is why we created frameworkstash!
          </p>
          <p className="lead">
            We are also passionate in the community having a voice. Anyone, not
            only registered users can request tutorials that they would like to
            see, or subscribe to a newsletter to be notified of the new
            tutorials that we post. We hope you enjoy it, happy coding!
          </p>
        </div>
      </div>
      <div className="row">
        <div className="main-section col-12 bg-dark text-center">
          <h2>Technologies we used</h2>
          <div className="row">
            <div className="col-md-4">
              <i className="tech-stack devicon-bootstrap-plain colored" />
            </div>
            <div className="col-md-4">
              <i className="tech-stack devicon-rails-plain colored" />
            </div>
            <div className="col-md-4">
              <i className="tech-stack devicon-react-original colored" />
            </div>
            {/* <div className="col-md-3">React Router placeholder</div> */}
          </div>
        </div>
      </div>
      <div className="row main-footer">
        <div className="col-12 text-center">
          <h2>Meet the Team</h2>
        </div>
        <div className="col-12">
          <div className="row">
            <div className="col-md-6">
              <div className="media">
                <img
                  className="team-img rounded-circle img-thumbnail d-flex mr-3"
                  src={edwin}
                  alt=""
                />
                <div className="media-body">
                  <h5 className="mt-0">Edwin Carbajal</h5>
                  Front End Wizard 🚀
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <a href="https://linkedin.com/in/edwincarbajal">
                        <i className="fa fa-linkedin" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="https://github.com/edwincarbajal">
                        <i className="fa fa-github" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="https://twitter.com/edwinxcarbajal">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="media">
                <img
                  className="team-img rounded-circle img-thumbnail d-flex mr-3"
                  src={teddy}
                  alt=""
                />
                <div className="media-body">
                  <h5 className="mt-0">Teddy Koomen</h5>
                  Web Developer 💻 | Jiu Jitsu Champion 🏆
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <a href="https://www.linkedin.com/in/theodoruskoomen/">
                        <i className="fa fa-linkedin" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="https://github.com/Ted-Koomen">
                        <i className="fa fa-github" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="https://twitter.com/Ted_Koomen">
                        <i className="fa fa-twitter" />
                      </a>
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
