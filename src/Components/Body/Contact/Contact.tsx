import React from 'react';
import { Button } from 'react-bootstrap';

import { socialSites } from '../../../Utilities/data/social';
import './Contact.scss';

const { email } = socialSites;

function Contact(): JSX.Element {
  return (
    <div className="contactCon">
      <div className="contactHeader">
        <h4>06. </h4>
        <h2>Contact</h2>
      </div>
      <div className="contactInfo">
        <h1>Get in Touch</h1>
        <h4>
          I&apos;m currently looking for new opportunities,
          my inbox is always open. Whether you have a question or just want to say hi,
          I&apos;ll try my best to get back to you!
        </h4>
        <a
          href={`mailto:${email.url}`}
          aria-label={email.site}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="contactButton" variant="link">
            Say Hello
          </Button>
        </a>
      </div>
    </div>
  );
}

export default Contact;
