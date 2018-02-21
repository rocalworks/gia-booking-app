import React from 'react';
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
            <FormControl componentClass="select" onChange={props.onChange}>
                {
                    options.map( (option) =>  
                        <option key={option.value} value={option.value}>{option.display}</option>
                    )
                }
            </FormControl>
        </FormGroup>
    );
}