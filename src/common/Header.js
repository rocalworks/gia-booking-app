import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Button, Glyphicon } from 'react-bootstrap';
import Searchbar from './Searchbar';

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
                                <Button bsStyle="success" onClick={this.props.toggleSearch}>
                                    <Glyphicon glyph="search"/> Search
                                </Button>
                            </li>
                        </ul>
                    </Navbar.Header>
                    
                    <Navbar.Collapse>
                        <Nav bsClass="nav navbar-nav hidden-xs">
                            <NavItem eventKey={1} onClick={this.props.toggleSearch}>Search</NavItem>
                        </Nav>
                        <Nav pullRight>
                            <NavItem eventKey={2} href="#2">Explore</NavItem>
                            <NavItem eventKey={3} href="#3">Contact</NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Searchbar 
                    open={this.props.openSearch} 
                    updateFilter={this.props.updateFilter}
                    />
            </header>
        );
    }
}

export default Header;