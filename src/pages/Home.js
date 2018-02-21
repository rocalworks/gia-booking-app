import React, { Component } from 'react';
import Search from './../sections/Search';

class Home extends Component {
    render() {
        return(
            <div className="container">
                <div className="content">
                    <div className="search-wrapper">
                        <Search filter={this.props.searchFilter} setFilter={this.props.setFilter}/>
                    </div>
                </div>
            </div>
            
            
        );
    }
}

export default Home; 