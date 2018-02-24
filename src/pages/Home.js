import React, { Component } from 'react';
import Search from './../sections/Search';
import Reviews from './../sections/Reviews';
import ShortStories from './../sections/ShortStories';

class Home extends Component {
    render() {
        return(
            <div>
                <div className="container">
                    <div className="content">
                        <div className="search-wrapper">
                            <div className="homes-header">View Our Homes</div>
                            <Search filter={this.props.searchFilter} setFilter={this.props.setFilter}/>
                        </div>
                    </div>
                </div>
                <div className="review-section">
                    <div className="container">
                        <div className="review-header">Hear from our Guests</div>
                        <div className="review-wrapper">
                            <Reviews />
                        </div>
                    </div>
                </div>
                <div className="stories-section">
                    <div className="container">
                        <div className="stories-header">Learn Atlanta</div>
                        <div className="stories-wrapper">
                            <ShortStories />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home; 