import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import * as ProfileImg from '../../../Utilities/Images/profile.png';
import { about } from '../../../Utilities/about';
import './About.scss';

function About(): JSX.Element {
  return (
    <Container className="about">
      <Row className="aboutRow">
        <Col md={1} />
        <Col md={6} className="aboutCol">
          <div>
            <h4>01. </h4>
            <h2>About Me</h2>
          </div>
          <h5>{about.details}</h5>
          <h5>{about.moreInfo}</h5>
        </Col>
        <Col md={3} className="aboutCol"><img src={ProfileImg.default} alt="user" /></Col>
        <Col md={2} />
      </Row>
      <Row className="aboutRow">
        <Col xs={1} />
        <Col xs={9} className="skillCol">
          <h2>My Skills</h2>
        </Col>
        <Col xs={2} />
      </Row>
    </Container>
  );
}

export default About;
