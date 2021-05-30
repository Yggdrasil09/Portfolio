import React, { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';

import ModalCom from './Modal';
import { info } from '../../../Utilities/data/info';
import './Work.scss';

function Work(): JSX.Element {
  const [loading, setLoading] = useState<boolean>(true);
  const [projectsData, setProjectsData] = useState([{
    html_url: '',
    name: '',
    description: '',
    language: '',
  }]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${info.githubProfile}/repos`)
      .then((response) => response.json())
      .then((response) => {
        setProjectsData(response);
        setLoading(false);
      })
      .catch(() => setLoading(true));
  }, []);

  return (
    <div className="workCon">
      <div className="workHeader">
        <h4>03. </h4>
        <h2>My Work</h2>
      </div>
      { (loading === true) ? (
        <Spinner animation="border" variant="warning" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      ) : (
        <div className="workModal">
          {
            projectsData.map((item) => (
              <ModalCom
                key={item.html_url}
                url={item.html_url}
                projectTitle={item.name}
                projectDesc={item.description}
                languagesUsed={item.language}
              />
            ))
          }
        </div>
      )}
    </div>
  );
}

export default Work;
