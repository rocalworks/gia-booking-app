import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Grid, Row, Col } from 'react-bootstrap';

{ /* TODO: - Separate components after initial page is up*
           - Don't forget the newsletter modal!
           - Should we add redux here as well? */}
class App extends Component {
    render() {
        return (
            <div className="wrapper">
                { /* TODO: Set fonts to the ones in the website */}
                <Navbar collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a>Get in Atlanta Inc.</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            <NavItem eventKey={1} href="#1">Home</NavItem>
                            <NavItem eventKey={1} href="#1">Guest Homes</NavItem>
                            <NavItem eventKey={2} href="#2">Explore</NavItem>
                            <NavItem eventKey={1} href="#1">Contact</NavItem>
                            <NavItem eventKey={4} href="#4" active>Book Now</NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                { /* TODO: Add parallax scrolling on background */ }
                <div className="container">
                    <div className="content">
                        { /* TODO: Add Airbnb-style booking (use react-calendar maybe?) */}
                    </div>
                </div>
                
                <footer>
                    <div className="container">
                        { /* TODO: Rearrange footer links */}
                        <div className="footer-section-wrapper">
                            <Grid fluid>
                                <Row className="show-grid">
                                    <Col sm={6} md={4}>
                                        <div className="footer-section">
                                            This is the first section. <br />
                                            Guess I'll assume a mini map will be placed here. Or a sitemap maybe?
                                        </div>
                                    </Col>
                                    <Col sm={6} md={4}>
                                        <div className="footer-section">
                                            This is the second section. <br />
                                            Payment methods could be placed here. And contact details as well. 
                                        </div>
                                    </Col>
                                    <Col sm={6} md={4}>
                                        <div className="footer-section">
                                            This is the third section. <br />
                                            
                                        </div>
                                    </Col>
                                </Row>
                            </Grid>
                        </div>
                        <div className="copyright">
                            <p className="copyright-name">© 2018 Company Name Here</p>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default App;
