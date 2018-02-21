import React, { Component } from 'react';

class House extends Component {
    render() {
        return(
            <div className="house-item">
                <img className="house-image" src={this.props.house.imageURL} alt={this.props.house.id} />
                Experience: {this.props.house.experience} <br />
                Max Guests: {this.props.house.maxGuests} <br />
                Description: {this.props.house.description}
            </div>
        );
    }
}

export default House;