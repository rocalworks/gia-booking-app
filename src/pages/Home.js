import React, { Component } from 'react';
import House from './../common/House';

class Home extends Component {
    render() {
        return(
            <div className="container">
                { /* TODO: Add parallax scrolling on background */ }
                <div className="content">
                    <div className="search-results">
                        <ul className="house-list">
                            { /* TODO: Create map for houses */}
                            <li className="house-item-wrapper">
                                <House house={{ id: "1" }} />
                            </li>
                            <li className="house-item-wrapper">
                                <House house={{ id: "2" }} />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home; 