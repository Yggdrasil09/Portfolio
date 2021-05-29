import React from 'react';

import './Work.scss';

function Modal(): JSX.Element {
  return (
    <div className="modalElement">
      <div>Links and icon go here</div>
      <div>
        <h3>The project heading goes here</h3>
        <h4>The project description goes here. Need to be quiet a description</h4>
      </div>
      <div>
        Tech Stack used goes here
      </div>
    </div>
  );
}

export default Modal;
