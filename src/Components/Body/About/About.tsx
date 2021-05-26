import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { about } from '../../../Utilities/about';
import './About.scss';

function About(): JSX.Element {
  return (
    <Container className="about">
      <Row className="aboutRow">
        <Col xs={1} />
        <Col xs={6} className="aboutCol">
          <div>
            <h4>01. </h4>
            <h2>About Me</h2>
          </div>
          <h5>{about.details}</h5>
          <h5>{about.moreInfo}</h5>
        </Col>
        <Col xs={3} className="aboutCol">Image goes here</Col>
        <Col xs={2} />
      </Row>
    </Container>
  );
}

export default About;
