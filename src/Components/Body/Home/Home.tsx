import React from 'react';
import { Container, Row } from 'react-bootstrap';

import './Home.scss';

function Home(): JSX.Element {
  return (
    <Container className="home">
      <Row>Hello world</Row>
    </Container>
  );
}

export default Home;
