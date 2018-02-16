import React, { Component } from 'react';

class House extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return(
            <div className="house-item">
                House number {this.props.house.id}
            </div>
        );
    }
}

export default House;