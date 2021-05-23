import React from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar} from 'react-bootstrap';

function NavMenu(){
    return (<>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">Portfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <NavLink className="mr-auto" to='/'>Home</NavLink>
                <NavLink to='/about' >About</NavLink>
                <NavLink to='/experience'>Experience</NavLink>
                <NavLink to='/work'>Work</NavLink>
                <NavLink to='/blog'>Blog</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
                <NavLink to='/resume'>Resume</NavLink>
            </Navbar.Collapse>
        </Navbar>
    </>);
}

export default NavMenu;