import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class Header extends Component {
    render() {
        return(
            <header>
                <Navbar collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="/" className="header-brand-name">Get In Atlanta</a>    
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    
                    <Navbar.Collapse>
                        <Nav pullRight>
                            <NavItem eventKey={1} href="#1">About Us</NavItem>
                            <NavItem eventKey={2} href="#2">Explore</NavItem>
                            <NavItem eventKey={3} href="#2">Short Stories</NavItem>
                            <NavItem eventKey={4} href="#3">Contact</NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </header>
        );
    }
}

export default Header;