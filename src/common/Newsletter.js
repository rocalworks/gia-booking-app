import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { InputFieldGroup } from './../utilities/FieldGroup';

class Newsletter extends Component {
    render() {
        let addSticky = (this.props.sticky ? "sticky-" : "") + "newsletter";
        
        return(
            <div className={addSticky}>
                <div className="newsletter-space"></div>
                <div className="newsletter-content">
                    <div className="container">
                        { /* TODO: Add content here. */}
                        
                        <Form inline>
                            <InputFieldGroup
                                id="newsletter"
                                type="email"
                                label="Subscribe to get the latest updates in GetInAtlanta"
                                placeholder="your.email@provider.com"
                                />
                            <Button bsStyle="success" type="submit">Submit</Button>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Newsletter;