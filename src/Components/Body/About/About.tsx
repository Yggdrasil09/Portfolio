import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import * as ProfileImg from '../../../Utilities/Images/profile.png';
import { about } from '../../../Utilities/about';
import './About.scss';

function About(): JSX.Element {
  return (
    <Container className="about">
      <Row className="aboutRow">
        <Col md={10} className="aboutCol">
          <Container fluid>
            <Row>
              <Col md={7} className="aboutSection">
                <div>
                  <h4>01. </h4>
                  <h2>About Me</h2>
                </div>
                <h5>{about.details}</h5>
                <h5>{about.moreInfo}</h5>
              </Col>
              <Col md={5} className="aboutSection">
                <img src={ProfileImg.default} alt="user" />
              </Col>
            </Row>
          </Container>
          <div className="skillCol">
            <h2>My Skills</h2>
            <div>
              <ul>
                { about.skills.map((skill:string) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
            <h2>Tools</h2>
            <div>
              <ul>
                { about.tools.map((tool:string) => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
            </div>
          </div>
        </Col>
        <Col md={2} />
      </Row>
    </Container>
  );
}

export default About;
