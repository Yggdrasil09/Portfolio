import React from 'react';

import { socialSites } from '../../Utilities/data/social';
import { ReactComponent as Github } from '../../Utilities/Images/github.svg';
import { ReactComponent as LinkedIn } from '../../Utilities/Images/linkedin.svg';
import { ReactComponent as Twitter } from '../../Utilities/Images/twitter.svg';
import { ReactComponent as Email } from '../../Utilities/Images/email.svg';
import './Footer.scss';

interface Isite {
  site: string,
  url: string
}

interface IsocialSites {
  devSites: Isite[],
  email: Isite
}

const { devSites, email }:IsocialSites = socialSites;

function Footer(): JSX.Element {
  return (
    <div className="footer">
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
      <div>
        <span className="sitesCol">
          <a href={`mailto:${email.url}`} aria-label={email.site} target="_blank" rel="noopener noreferrer">
            <Email />
          </a>
        </span>
        <span className="rightFooter"><div className="vLine" /></span>
      </div>
    </div>
  );
}

export default Footer;
