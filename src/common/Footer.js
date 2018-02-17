import React, { Component } from 'react';
import { Grid, Row, Col, Form, Button } from 'react-bootstrap';
import { GMap } from './../utilities/GMap';
import { InputFieldGroup } from './../utilities/FieldGroup';

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
                                                <li className="card"><img className="payment-image" src="/images/cards/visa.png" /></li>
                                                <li className="card"><img className="payment-image" src="/images/cards/paypal.png" /></li>
                                                <li className="card"><img className="payment-image" src="/images/cards/aexpress.png" /></li>
                                                <li className="card"><img className="payment-image" src="/images/cards/mastercard.png" /></li>
                                            </ul>
                                        </div>
                                        <div className="footer-subscription">
                                            Subscribe to our newsletter!
                                            <Form inline>
                                                <InputFieldGroup
                                                    id="subscription-email"
                                                    type="email"
                                                    placeholder="your.email@provider.com"
                                                    />
                                                <Button bsStyle="success" type="submit">  Submit</Button>
                                            </Form>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={6} md={6}>
                                    <div className="footer-section">
                                        <div className="footer-contact">
                                            Contact Us
                                        </div>
                                        <div className="address-bar">
                                            Address:
                                            1270 Caroline St., Ste D120
                                            Atlanta, GA 30317
                                        </div>
                                        <div className="telephone">
                                            Telephone No: 123-4567
                                        </div>
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