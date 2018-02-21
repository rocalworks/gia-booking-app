import React, { Component } from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';

class House extends Component {
    render() {
        { /* TODO: Change to carousel background (up to 5 images) */ }
        const styles = {
            backgroundImage: "url(" + this.props.house.imageURL + ")"
        }
        
        return(
            <div className="house-item">
                <div className="house-image" style={styles}>
                    <div className="house-info">
                        <a className="house-name">
                            {this.props.house.name}
                        </a>
                        { /* TODO: Make it star ratings instead*/ }
                        <a className="house-reviews">
                            {this.props.house.reviews} Reviews
                        </a>
                    </div>
                </div>
                <div className="house-highlights">
                    <div className="house-short-description">
                        <a className="highlights-label">Short Description</a>
                        {this.props.house.shortDescription}
                    </div>
                    <div className="house-main-features">
                        <a className="highlights-label">Main Features</a>
                        {this.props.house.mainFeatures}
                    </div>
                </div>
                <div className="house-options">
                    <ButtonGroup justified>
                        <Button bsStyle="primary">View More</Button>
                        <Button bsStyle="danger">Book Now</Button>
                    </ButtonGroup>
                </div>
            </div>
        );
    }
}

export default House;