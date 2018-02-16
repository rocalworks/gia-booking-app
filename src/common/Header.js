import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Button, Glyphicon } from 'react-bootstrap';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

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
                        
                        <ul className="nav navbar-nav visible-xs">
                            <li className="pull-right">
                                <Button bsStyle="success">
                                    <Glyphicon glyph="search"/> Sea
                                </Button>
                            </li>
                        </ul>
                    </Navbar.Header>
                    
                    <Navbar.Collapse>
                        <Nav bsClass="nav navbar-nav hidden-xs">
                            <NavItem eventKey={2} href="#2">Search</NavItem>
                        </Nav>
                        <Nav pullRight>
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