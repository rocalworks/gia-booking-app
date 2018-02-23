import React, { Component } from 'react';
import Slider from './../utilities/Slider';
import { reviews } from './../data/reviews';

class Reviews extends Component {
    render() {
        const styles = {
            backgroundColor: "rgba(255, 255, 255, 0.05)"
        }
        
        return(
            <div>
                <Slider slides={reviews} styles={styles} transparent />
            </div>
        );
    }
}

export default Reviews;