import React, { Component } from 'react';
import { Panel, Form, Button } from 'react-bootstrap';
import { SelectFieldGroup, InputFieldGroup } from './../utilities/FieldGroup';

class Searchbar extends Component {
    constructor(props) {
        super(props);
        
        this.updateFilter = this.updateFilter.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }
    
    handleToggle(e) {
        // Do something while open?
        console.log("Search open!" + e);
    }
    
    updateFilter(e) {
        // console.log(e.target.id);
        // this.props.updateFilter(e.target, e.target.value);
        this.props.updateFilter(e.target.id, e.target.value);
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
                                    onChange={this.updateFilter}
                                    />
                                <InputFieldGroup
                                    id="check-in"
                                    type="date"
                                    label="Check In"
                                    placeholder="mm/dd/yyyy"
                                    onChange={this.updateFilter}
                                    />
                                <InputFieldGroup
                                    id="check-out"
                                    type="date"
                                    label="Check Out"
                                    placeholder="mm/dd/yyyy"
                                    onChange={this.updateFilter}
                                    />
                                <InputFieldGroup
                                    id="numGuests"
                                    type="number"
                                    label="Guests"
                                    placeholder="1"
                                    min="1"
                                    onChange={this.updateFilter}
                                    />
                                <Button bsStyle="danger" type="reset" id="btn-reset">Reset</Button>
                            </Form>
                        </div>
                    </Panel.Body>
                </Panel.Collapse>
            </Panel>
        );
    }
}

export default Searchbar;