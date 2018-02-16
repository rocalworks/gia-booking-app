import React, { Component } from 'react';

class House extends Component {
    render() {
        return(
            <div className="house-item">
                House ID: {this.props.house.id} <br />
                Experience: {this.props.house.experience} <br />
                Max Guests: {this.props.house.maxGuests} <br />
            </div>
        );
    }
}

export default House;