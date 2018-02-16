import React, { Component } from 'react';
import Search from './/../utilities/Search';

class Home extends Component {
    render() {
        return(
            <div className="container">
                { /* TODO: Add parallax scrolling on background */ }
                <div className="content">
                    <Search filter={this.props.searchFilter} setFilter={this.props.setFilter}/>
                </div>
            </div>
        );
    }
}

export default Home; 