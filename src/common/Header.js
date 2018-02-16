import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Button, Glyphicon } from 'react-bootstrap';
import Search from './Search';

class Header extends Component {
    constructor(props) {
        super(props);
        
        this.triggerSearch = this.triggerSearch.bind(this);
        
        this.state = {
            openSearch: false
        }
    }
    
    triggerSearch(e) {
        this.setState( () => { 
            return {
                openSearch: !this.state.openSearch
            }
        });
    }
    
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
                                <Button bsStyle="success" onClick={this.triggerSearch}>
                                    <Glyphicon glyph="search"/> Search
                                </Button>
                            </li>
                        </ul>
                    </Navbar.Header>
                    
                    <Navbar.Collapse>
                        <Nav bsClass="nav navbar-nav hidden-xs">
                            <NavItem eventKey={2} onSelect={this.triggerSearch}>Search</NavItem>
                        </Nav>
                        <Nav pullRight>
                            <NavItem eventKey={2} href="#2">Explore</NavItem>
                            <NavItem eventKey={1} href="#1">Contact</NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Search open={this.state.openSearch}/>
            </header>
        );
    }
}

export default Header;