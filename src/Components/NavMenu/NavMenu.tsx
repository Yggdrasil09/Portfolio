import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';

import { config } from '../config';

interface InavLink {
    name: string
    url: string
}

function NavMenu():JSX.Element {
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
            Home
          </NavLink>
          {config.navLinks.map((obj: InavLink) => (
            <NavLink to={obj.url}>{obj.name}</NavLink>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavMenu;
