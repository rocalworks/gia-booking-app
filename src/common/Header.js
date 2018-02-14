import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class Header extends Component {
    render() {
        return(
            <header>
                <div className="header-brand">
                    <div>
                        <a href="/" className="header-brand-name">Get In Atlanta</a>
                    </div>
                    <div>
                        <a href="#" className="social-media-icons"><i className="fa fa-facebook-official fa-lg fa-fw"></i></a>
                        <a href="#" className="social-media-icons"><i className="fa fa-twitter fa-lg fa-fw"></i></a>
                        <a href="#" className="social-media-icons"><i className="fa fa-tripadvisor fa-lg fa-fw"></i></a>
                        <a href="#" className="social-media-icons"><i className="fa fa-instagram fa-lg fa-fw"></i></a>
                    </div>
                </div>
                <Navbar collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <NavItem eventKey={1} href="#1">Home</NavItem>
                            <NavItem eventKey={1} href="#1">Guest Homes</NavItem>
                            <NavItem eventKey={2} href="#2">Explore</NavItem>
                            <NavItem eventKey={1} href="#1">Contact</NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </header>
        );
    }
}

export default Header;