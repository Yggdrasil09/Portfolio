import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { socialSites } from '../../Utilities/social';
import { ReactComponent as Github } from '../../Utilities/Images/github.svg';
import { ReactComponent as LinkedIn } from '../../Utilities/Images/linkedin.svg';
import { ReactComponent as Twitter } from '../../Utilities/Images/twitter.svg';
import { ReactComponent as Email } from '../../Utilities/Images/email.svg';
import './Footer.scss';

const { devSites, email } = socialSites;

function Footer(): JSX.Element {
  return (
    <Container fluid className="footer">
      <Row>
        <Col className="footerCol leftCol" lg={2} md={2} xl={1}>
          <div>
            <span className="sitesCol">
              <a href={devSites[0].url} aria-label={devSites[0].site} target="_blank" rel="noopener noreferrer">
                <Github />
              </a>
            </span>
            <span className="sitesCol">
              <a href={devSites[1].url} aria-label={devSites[1].site} target="_blank" rel="noopener noreferrer">
                <LinkedIn />
              </a>
            </span>
            <span className="sitesCol">
              <a href={devSites[2].url} aria-label={devSites[2].site} target="_blank" rel="noopener noreferrer">
                <Twitter />
              </a>
            </span>
            <span className="leftFooter"><div className="vLine" /></span>
          </div>
        </Col>
        <Col lg={8} md={8} xl={10} />
        <Col className="footerCol rightCol" lg={2} md={2} xl={1}>
          <div>
            <span className="sitesCol">
              <a href={email.url} aria-label={email.site} target="_blank" rel="noopener noreferrer">
                <Email />
              </a>
            </span>
            <span className="rightFooter"><div className="vLine" /></span>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
