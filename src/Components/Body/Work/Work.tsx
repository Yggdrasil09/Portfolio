import React from 'react';

import Modal from './Modal';
import './Work.scss';

function Work(): JSX.Element {
  return (
    <div className="workCon">
      <div className="workHeader">
        <h4>03. </h4>
        <h2>My Work</h2>
      </div>
      <div className="workModal">
        <Modal />
      </div>
    </div>
  );
}

export default Work;
