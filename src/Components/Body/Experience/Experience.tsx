import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './Experience.scss';

function Experience(): JSX.Element {
  return (
    <Container className="expContainer">
      <Row className="expRow">
        <Col xs={10} className="expCol">
          <div className="expHeader">
            <h4>02. </h4>
            <h2>My Experience</h2>
          </div>
          <div className="expTimeline">
            Here goes timeline
          </div>
        </Col>
        <Col xs={2} />
      </Row>
    </Container>
  );
}

export default Experience;
