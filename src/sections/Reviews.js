import React, { Component } from 'react';
import Slider from './../utilities/Slider';
import { reviews } from './../data/reviews';

class Reviews extends Component {
    render() {
        const styles = {
            backgroundColor: "none"
        };
        
        return(
            <div>
                <Slider content={reviews} styles={styles} slideInterval={5000} />
            </div>
        );
    }
}

export default Reviews;