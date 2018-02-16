import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import { FormGroup, FormControl, ControlLabel, HelpBlock, InputGroup } from 'react-bootstrap';

function FieldGroup({ id, label, help, ...props }) {
    return (
        <FormGroup controlId={id}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
            {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
    );
}

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
                            <FormGroup>
                                <InputGroup>
                                    <ControlLabel>Experience</ControlLabel>
                                    <FormControl componentClass="select" placeholder="select">
                                        <option value="Party"></option>
                                        <option value="Children"></option>
                                        <option value="Cat Here"></option>
                                    </FormControl>
                                    <FieldGroup
                                        id="check-in"
                                        type="text"
                                        label="Check In"
                                        placeholder="mm/dd/yyyy"
                                        />
                                    <FieldGroup
                                        id="check-out"
                                        type="text"
                                        label="Check Out"
                                        placeholder="mm/dd/yyyy"
                                        />
                                </InputGroup>
                            </FormGroup>
                        </div>
                    </Panel.Body>
                </Panel.Collapse>
            </Panel>
        );
    }
}

export default Search;