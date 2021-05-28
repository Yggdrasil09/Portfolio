import React from 'react';

import * as ProfileImg from '../../../Utilities/Images/profile.png';
import { about } from '../../../Utilities/about';
import './About.scss';

function About(): JSX.Element {
  return (
    <div className="about">
      <div className="aboutSection">
        <div className="aboutContent">
          <div className="aboutHead">
            <h4>01. </h4>
            <h2>About Me</h2>
          </div>
          <div className="aboutData">
            <h5>{about.details}</h5>
            <h5>{about.moreInfo}</h5>
          </div>
        </div>
        <div className="aboutImg">
          <img src={ProfileImg.default} alt="user" />
        </div>
      </div>
      <div className="skillSection">
        <div className="skills">
          <h2>My Skills</h2>
          <ul className="list">
            { about.skills.map((skill:string) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="skills">
          <h2>Tools I use</h2>
          <ul className="list">
            { about.tools.map((tool:string) => (
              <li key={tool}>{tool}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
