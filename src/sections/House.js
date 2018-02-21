import React, { Component } from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';

class House extends Component {
    render() {
        const styles = {
            backgroundImage: "url(" + this.props.house.imageURL + ")"
        }
        
        let review = this.props.house.reviews;
        let i = 0;
        const starReview = [];
                                
        while(i < 5) {
            if(review === 0.5) {
                starReview.push(<i key={review} className="icon-star-half-empty"></i>); 
            } else if (review === 0){
                starReview.push(<i key={review} className="icon-star-empty"></i>); 
            } else {
                starReview.push(<i key={review} className="icon-star"></i>);
            }
            
            review = review - 1;
            i++;
        };
        
        return(
            <div className="house-item">
                <div className="house-image" style={styles}>
                    <div className="house-info">
                        <a className="house-name">
                            {this.props.house.name}
                        </a>
                        { /* TODO: Make it star ratings instead*/ }
                        <a className="house-reviews">
                            {starReview}
                        </a>
                        <div>
                            
                        </div>
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