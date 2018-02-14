import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class Footer extends Component {
    render() {
        return(
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
        );
    }
}

export default Footer; 