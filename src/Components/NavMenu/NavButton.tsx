import React from 'react';
import { Button } from 'react-bootstrap';

import './NavMenu.scss';

type Props = {
    name: string,
    index?: number
} & typeof defaultProps;

const defaultProps = {
  index: -1,
};

function NavButton({ name, index = -1 }: Props): JSX.Element {
  return (
    <Button className="navButton" variant="link">
      { index !== -1 && (
      <span className="buttonIndex">
        0
        {index + 1}
        .
      </span>
      )}
      {name}
    </Button>
  );
}

NavButton.defaultProps = defaultProps;

export default NavButton;
