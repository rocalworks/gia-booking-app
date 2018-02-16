import React, { Component } from 'react';

class Newsletter extends Component {
    render() {
        let addSticky = (this.props.sticky ? "sticky-" : "") + "newsletter";
        
        return(
            <div className={addSticky}>
                <div className="newsletter-space"></div>
                <div className="newsletter-content">
                    <div className="content">
                        { /* TODO: Add content here. */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Newsletter;