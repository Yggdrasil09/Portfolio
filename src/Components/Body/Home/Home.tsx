import React from 'react';
import {
  Container, Row, Col, Button,
} from 'react-bootstrap';

import './Home.scss';

function Home(): JSX.Element {
  return (
    <Container className="home">
      <Row className="homeRow">
        <Col xs={1} />
        <Col xs={9}>
          <h4>Hi, I am</h4>
          <h1>Karthik Chowdary Paladugu.</h1>
          <h1>I am a Software Developer</h1>
          <h4>
            I am a Boston-based software engineer who specializes in building (and occasionally designing)
            exceptional digital experiences. Currently, I am an engineer at Upstatement focused on building
            accessible, human-centered products.
          </h4>
          <Button variant="warning"> Get in Touch</Button>
        </Col>
        <Col xs={2} />
      </Row>
    </Container>
  );
}

export default Home;
