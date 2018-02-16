import React, { Component } from 'react';
import House from './../common/House';
import { houses } from './../data/houses';

class Home extends Component {
    render() {
        return(
            <div className="container">
                { /* TODO: Add parallax scrolling on background */ }
                <div className="content">
                    <div className="search-results">
                        <ul className="house-list">
                            {
                                houses.map( (house) => 
                                    <li className="house-item-wrapper">
                                        <House house={house} />
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home; 