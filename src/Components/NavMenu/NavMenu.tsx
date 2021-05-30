import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';

import NavButton from './NavButton';
import { config } from '../../Utilities/data/config';
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
        variant="dark"
        fixed="top"
        className="navBar"
      >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <NavLink className="mr-auto" to="/">
            <NavButton name="Home" />
          </NavLink>
          {config.navLinks.map((obj: InavLink, index: number) => (
            <NavLink key={obj.url} to={obj.url}>
              <NavButton name={obj.name} index={index} />
            </NavLink>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavMenu;
