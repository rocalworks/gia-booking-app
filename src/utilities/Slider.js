import React, { Component } from 'react';

class Slide extends Component {
    render() {
        const image = {
            backgroundImage: "url(" + this.props.current.image + ")"
        }
        
        return(
            <div className="slide-wrapper" style={this.props.styles}>
                <div className="slide-title">
                    {this.props.current.title}
                </div>
                <div className="slide-image" style={image}></div>
                <div className="slide-caption">
                    <span className="slide-content">{this.props.current.content}</span>
                    <span className="slide-name">{this.props.current.name}</span>
                </div>
            </div>
        );
    }
};

class Slider extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            index: 0
        }
    }
    
    componentDidMount() {
        this.interval = setInterval(() => this.setSlider(), this.props.slideInterval);
    }
    
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    
    setSlider() {
        let currentIndex = this.state.index === this.props.content.length - 1 ? 0 : this.state.index + 1; 
        
        this.setState( () => {
            return {
                index: currentIndex
            }
        });
    }

    moveSlider(newIndex, e) {
        clearInterval(this.interval);
        this.setState( () => {
            return {
                index: newIndex
            }
        });
        this.interval = setInterval(() => this.setSlider(), this.props.slideInterval);
    }
    
    sliderButtons() {
        let buttons = [];
        
        for(let i = 0; i < this.props.content.length; i++) {
            let moveSlider = this.moveSlider.bind(this, i);
            let active = i === this.state.index ? "inverted" : ""
            
            buttons.push(<li key={"btn-slide-" + i} className={`btn-slide ${active}`} onClick={moveSlider}>&#9673;</li>)
        }
        
        return buttons;
    }
    
    render() {
        return(
            <div className="slider-wrapper">
                <div className="slider-content">
                    <Slide styles={this.props.styles} current={this.props.content[this.state.index]}/>    
                </div>
                <div className="slider-buttons-wrapper">
                    <ul className="slider-buttons">
                        {this.sliderButtons()}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Slider;