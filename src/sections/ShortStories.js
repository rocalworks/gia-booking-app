import React, { Component } from 'react';
import Slider from './../utilities/Slider';
import { stories } from './../data/stories';

class Reviews extends Component {
    render() {
        const styles = {
            backgroundColor: "none"
        };
        
        return(
            <div>
                <Slider content={stories} styles={styles}  slideInterval={7500} />
            </div>
        );
    }
}

export default Reviews;