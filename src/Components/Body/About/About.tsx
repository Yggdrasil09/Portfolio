import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './About.scss';

function About(): JSX.Element {
  return (
    <Container className="about">
      <Row className="aboutRow">
        <Col />
        <Col><h1>Hi, this is about me</h1></Col>
        <Col />
      </Row>
    </Container>
  );
}

export default About;
