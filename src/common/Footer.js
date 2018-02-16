import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Newsletter from './Newsletter';

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
                                        <p className="copyright-name">© 2018 Company Name Here</p>
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
                </div>
                <Newsletter />
            </footer>
        );
    }
}

export default Footer; 