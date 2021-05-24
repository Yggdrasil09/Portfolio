import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Button } from 'react-bootstrap';

import { config } from '../config';
import './NavMenu.scss';

interface InavLink {
    name: string
    url: string
}

function NavMenu(): JSX.Element {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        fixed="top"
      >
        <Navbar.Brand href="/">Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <NavLink className="mr-auto" to="/">
            <Button className="navButton" variant="link">
              Home
            </Button>
          </NavLink>
          {config.navLinks.map((obj: InavLink) => (
            <NavLink key={obj.url} to={obj.url}>
              <Button className="navButton" variant="link">
                {obj.name}
              </Button>
            </NavLink>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavMenu;
