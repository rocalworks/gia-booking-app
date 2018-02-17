import React, { Component } from 'react';
import { Form, FormGroup, FormControl, InputGroup, Button } from 'react-bootstrap';
import { InputFieldGroup } from './../utilities/FieldGroup';

function DesktopNewsletter(props) {
    return (
        <Form inline>
            <InputFieldGroup
                id="subscription-email"
                type="email"
                label={props.label}
                placeholder="your.email@provider.com"
                />
            <Button bsStyle="success" type="submit">Submit</Button>
        </Form>
    );
}

class MobileNewsletter extends Component {
    constructor(props) {
        super(props);
        
        this.toggleSubscribeForm = this.toggleSubscribeForm.bind(this);
        
        this.state = {
            isSubscribing: false
        }
    }
    
    toggleSubscribeForm(e) {
        this.setState(() => {
            return {
                isSubscribing: true
            }
        });
    }
    
    render() {
        if (!this.state.isSubscribing) {
            return (
                <div className="subscription-overflow">
                    <Button onClick={this.toggleSubscribeForm}>Subscribe here!</Button>
                </div>
            )
        }
        
        return(
            <div className="mobile-newsletter">
                <div>
                    <FormGroup bsClass="form-group subscription-wrapper">
                        <InputGroup>
                            <FormControl 
                                id="subscription-email" 
                                type="email" 
                                placeholder="your.email@provider.com"
                                />
                            <InputGroup.Button>
                                <Button>Subscribe</Button>
                            </InputGroup.Button>
                        </InputGroup>
                    </FormGroup>
                </div>
            </div>
        );
    }
}

class Newsletter extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            isMobile: false
        }
    }
    
    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
    }

    resize() {
        this.setState(() => {
            return {
                isMobile: window.innerWidth <= 767
            }
        });
    }
    render() {
        let addSticky = (this.props.sticky ? "sticky-" : "") + "newsletter";
        let newsletter = <DesktopNewsletter label="Subscribe to get the latest updates in GetInAtlanta"/>
        
        if (this.state.isMobile) {
            newsletter = <MobileNewsletter placeholder="Updates? Subscribe now!"/>
        } 
        
        return(
            <div>
                <div className="newsletter-space"></div>
                <div className={addSticky}>
                    <div className="newsletter-content">
                        <div className="container">
                            { newsletter }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Newsletter;