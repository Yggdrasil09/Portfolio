import React from 'react';
import {
  Container, Row, Col, Button,
} from 'react-bootstrap';

import { socialSites } from '../../../Utilities/data/social';
import { info } from '../../../Utilities/data/info';
import './Home.scss';

const { email } = socialSites;

function Home(): JSX.Element {
  return (
    <Container className="home">
      <Row className="homeRow">
        <Col xs={1} />
        <Col xs={9} className="homeCol">
          <h4 className="secHead">Hi, I am</h4>
          <h1 className="priHead">{info.name}</h1>
          <h1>{info.position}</h1>
          <h4 className="descHead">
            {info.description}
          </h4>
          <a
            href={`mailto:${email.url}`}
            aria-label={email.site}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="homeButton" variant="link">
              Get in Touch
            </Button>
          </a>
        </Col>
        <Col xs={2} />
      </Row>
    </Container>
  );
}

export default Home;
