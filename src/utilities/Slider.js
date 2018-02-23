import React, { Component } from 'react';

const Slide = (props) => (
    <div className="slide-wrapper" style={props.styles}>
        Slide # {props.index} here.
    </div>
);

class Slider extends Component {
    constructor(props) {
        super(props);
        
        this.prevSlide = this.prevSlide.bind(this);
        this.nextSlide = this.nextSlide.bind(this);
        
        this.state = {
            index: 0
        }
    }
    
    prevSlide(e) {
        this.moveSlider(-1);
    }
    
    nextSlide(e) {
        this.moveSlider(1);
    }
    
    moveSlider(direction) {
        let newIndex = 0;
        
        if (this.state.index <= 0 && direction !== 1) {
            newIndex = this.props.slides.length - 1;
        } else if (this.state.index >= this.props.slides.length - 1  && direction !== -1) {
            newIndex = 0;
        } else {
            newIndex = this.state.index + direction
        }
        
        this.setState( () => {
            return {
                index: newIndex
            }
        });
    }
    
    render() {
        const transparent = this.props.transparent ? "transparent" : "";
        
        return(
            <div className="slider-wrapper">
                <div className={`btn-slider-left ${transparent}`} onClick={this.prevSlide}>
                    <span className="btn-slider" onClick={this.prevSlide}><i className="icon-chevron-left"></i></span>
                </div>
                <div className={`btn-slider-right  ${transparent}`} onClick={this.nextSlide}>
                    <span className="btn-slider" onClick={this.nextSlide}><i className="icon-chevron-right"></i></span>
                </div>
                <div className="slider-content">
                    <Slide index={this.state.index} styles={this.props.styles}/>
                </div>
            </div>
        );
    }
}

export default Slider;