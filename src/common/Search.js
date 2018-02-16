import React, { Component } from 'react';
import { Panel, Form } from 'react-bootstrap';
import { SelectFieldGroup, InputFieldGroup } from './FieldGroup';

class Search extends Component {
    constructor(props) {
        super(props);
        
        this.handleToggle = this.handleToggle.bind(this);
    }
    
    handleToggle(e) {
        // Do something while open?
        console.log("Search open!" + e);
    }
    
    render() {
        return(
            <Panel id="search-panel" expanded={this.props.open} onToggle={this.handleToggle}>
                <Panel.Collapse>
                    <Panel.Body>
                        { /* TODO: Form goes here. */}
                        <div className="container">
                            <Form inline>
                                { /* TODO: Reflect option from the actual data */ }
                                <SelectFieldGroup
                                    id="experience"
                                    label="Experience"
                                    options={[ 
                                        { value: "none", display: "< select >" },
                                        { value: "party", display: "Party" },
                                        { value: "children", display: "Children" },
                                        { value: "etc", display: "Et Cetera" }
                                    ]}
                                    />
                                <InputFieldGroup
                                    id="check-in"
                                    type="text"
                                    label="Check In"
                                    placeholder="mm/dd/yyyy"
                                    />
                                <InputFieldGroup
                                    id="check-out"
                                    type="text"
                                    label="Check Out"
                                    placeholder="mm/dd/yyyy"
                                    />
                                <InputFieldGroup
                                    id="numGuests"
                                    type="number"
                                    label="Guests"
                                    placeholder="0"
                                    />
                            </Form>
                        </div>
                    </Panel.Body>
                </Panel.Collapse>
            </Panel>
        );
    }
}

export default Search;