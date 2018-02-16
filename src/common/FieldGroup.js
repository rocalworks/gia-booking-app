import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';

export function InputFieldGroup({ id, label, help, ...props }) {
    return (
        <FormGroup controlId={id}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
            {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
    );
}

export function SelectFieldGroup({ id, label, options, help, ...props}) {
    return (
        <FormGroup controlId={id}>
            <ControlLabel>{label}</ControlLabel>
            { /* TODO: Reflect option from the actual data */ }
            <FormControl componentClass="select" placeholder={label}>
                {
                    options.map( (option) =>  
                        <option key={option.value} value={option.value}>{option.display}</option>
                    )
                }
            </FormControl>
        </FormGroup>
    );
}