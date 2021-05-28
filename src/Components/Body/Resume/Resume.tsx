import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './Resume.scss';

function Resume(): JSX.Element {
  return (
    <Container className="resumeCon">
      <Row className="resumeRow">
        <Col sm={10} className="resumeCol">
          <div className="resumeHeader">
            <h4>05. </h4>
            <h2>My Resume</h2>
          </div>
        </Col>
        <Col sm={2} />
      </Row>
    </Container>
  );
}

export default Resume;
