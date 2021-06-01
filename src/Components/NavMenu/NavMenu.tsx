import React, { useRef } from 'react';
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
  const hamRef = useRef<HTMLButtonElement | null>(null);
  const homeRef = useRef<HTMLAnchorElement | null>(null);
  const itemsRef = useRef<HTMLAnchorElement[]>([]);

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        fixed="top"
        className="navBar"
      >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" ref={hamRef} />
        <Navbar.Collapse id="responsive-navbar-nav">
          <NavLink ref={homeRef} className="mr-auto" to="/" onClick={() => { if (hamRef.current != null && window.innerWidth <= 991) hamRef.current.click(); }}>
            <NavButton name="Home" />
          </NavLink>
          {config.navLinks.map((obj: InavLink, index: number) => (
            <NavLink
              key={obj.url}
              ref={(element:HTMLAnchorElement) => itemsRef.current.push(element)}
              to={obj.url}
              onClick={() => { if (hamRef.current != null && window.innerWidth <= 991) hamRef.current.click(); }}
            >
              <NavButton name={obj.name} index={index} />
            </NavLink>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavMenu;
