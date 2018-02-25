import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { GMap } from './../utilities/GMap';
import { FormGroup, InputGroup, FormControl, Button } from 'react-bootstrap';

class Footer extends Component {
    render() {
        return(
            <footer>
                <div className="container">
                    { /* TODO: Rearrange footer links */}
                    <div className="footer-section-wrapper">
                        <Grid fluid>
                            <Row className="show-grid">
                                <Col sm={6} md={6}>
                                    <div className="footer-section">
                                        <div className="footer-payment">
                                            We Accept
                                            <ul className="payment-list">
                                                <li className="card"><img className="payment-image" src="/images/cards/visa.png" alt="visa"/></li>
                                                <li className="card"><img className="payment-image" src="/images/cards/paypal.png" alt="paypal"/></li>
                                                <li className="card"><img className="payment-image" src="/images/cards/aexpress.png" alt="american express"/></li>
                                                <li className="card"><img className="payment-image" src="/images/cards/mastercard.png" alt="mastercard"/></li>
                                            </ul>
                                        </div>
                                        <div className="footer-contact">
                                            Contact Us
                                            <div className="address-bar">
                                                1270 Caroline St., Ste D120 <br />
                                                Atlanta, GA 30317
                                            </div>
                                            <div className="telephone">
                                                Telephone No: 123-4567
                                            </div>
                                        </div>
                                        <div className="footer-subscribe">
                                            Subscribe to get the latest updates in GetInAtlanta
                                            <FormGroup bsClass="form-group subscription-wrapper">
                                                <InputGroup>
                                                    <FormControl 
                                                        id="subscription-email" 
                                                        type="email" 
                                                        placeholder="your.email@provider.com"
                                                        />
                                                    <InputGroup.Button>
                                                        <Button bsStyle="primary">Subscribe</Button>
                                                    </InputGroup.Button>
                                                </InputGroup>
                                            </FormGroup>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={6} md={6}>
                                    <div className="footer-section">
                                        <GMap /> 
                                    </div>
                                </Col>
                            </Row>
                        </Grid>
                    </div>
                </div>
                <div className="copyright">
                    <p className="copyright-name">© 2019 Get In Atlanta</p>
                </div>
            </footer>
        );
    }
}

export default Footer; 