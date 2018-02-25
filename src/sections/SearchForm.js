import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { SelectFieldGroup, InputFieldGroup } from './../utilities/FieldGroup';

class SearchForm extends Component {
    constructor(props) {
        super(props);
        
        this.setFilter = this.setFilter.bind(this);
        this.toggleAdvancedForm = this.toggleAdvancedForm.bind(this);
        
        this.state = {
            openAdvanced: false
        }
    }
    
    setFilter(e) {
         this.props.updateFilter(e.target.id, e.target.value);
    }
    
    toggleAdvancedForm() {
        this.setState( () => {
            return {
                openAdvanced: !this.state.openAdvanced
            }
        })
    }
    
    render() {
        return(
            <div className="search-form">
                <div className="container">
                    <Form inline>
                        { /* TODO: Reflect option from the actual data */ }
                        <SelectFieldGroup
                            id="experience"
                            label="Experience"
                            options={[ 
                                { value: "none", display: "Choose One" },
                                { value: "tourism", display: "Tourism" },
                                { value: "business", display: "Business Travel" },
                                { value: "event", display: "Event" },
                                { value: "family", display: "Family" },
                                { value: "girls", display: "Girls Weekend" }
                            ]}
                            onChange={this.setFilter}
                            />
                        <InputFieldGroup
                            id="numGuests"
                            type="number"
                            label="Guests"
                            placeholder="1"
                            min="1"
                            onChange={this.setFilter}
                            />
                        <InputFieldGroup
                            id="check-in"
                            type="date"
                            label="Check In"
                            placeholder="mm/dd/yyyy"
                            onChange={this.setFilter}
                            />
                        <InputFieldGroup
                            id="check-out"
                            type="date"
                            label="Check Out"
                            placeholder="mm/dd/yyyy"
                            onChange={this.setFilter}
                            />
                        <Button bsStyle="danger" type="reset" id="btn-reset">Reset</Button>
                        
                    </Form>
                </div>
            </div>
        );
    }
}

export default SearchForm;