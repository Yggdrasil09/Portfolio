import React from 'react';
import { Modal } from 'react-bootstrap';

import { ReactComponent as Folder } from '../../../Utilities/Images/folder.svg';
import { ReactComponent as Github } from '../../../Utilities/Images/github.svg';
import './Work.scss';

interface Props {
  url: string,
  projectTitle: string,
  projectDesc: string,
  languagesUsed: string
}

function ModalCom({
  url, projectTitle, projectDesc, languagesUsed,
}:Props): JSX.Element {
  return (
    <Modal.Dialog className="modalElement">
      <Modal.Header className="modalHeader">
        <Folder className="folderSvg" />
        <a href={url} aria-label="Github Project" target="_blank" rel="noopener noreferrer">
          <Github className="githubSvg" />
        </a>
      </Modal.Header>
      <Modal.Body className="modalBody">
        <h4>{projectTitle}</h4>
        <p>{projectDesc}</p>
      </Modal.Body>
      <Modal.Footer className="modalFooter">
        <p>{languagesUsed}</p>
      </Modal.Footer>
    </Modal.Dialog>
  );
}

export default ModalCom;
