import React, { Component } from 'react';
import House from './../common/House';
import { houses } from './../data/houses';

class Search extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            houseList: houses
        }
    }
    
    componentWillReceiveProps(nextProps) {
        if(nextProps.setFilter) {
            this.filterHouses(nextProps.filter);
        }
    }
    
    filterHouses(filter) {
        let newHouseList = [];
        
        { /* TODO: Convert this into rule-firing */ }
        for (var house of houses) {
            let validateExp = this.isNull(filter, "experience") || house.experience.includes(filter.experience);
            let validateNumGuests = this.isNull(filter, "numGuests") || house.maxGuests >= filter.numGuests;
            
            if (validateExp && validateNumGuests) {
                newHouseList.push(house);
            }
        }
        
        this.setState(() => {
            return {
                houseList: newHouseList
            }
        })
    }
    
    isNull(obj, key) {
        return( !Object.keys(obj).includes(key) || obj[key] == undefined );
        
    }
    
    render() {
        return(
            <div className="search-results">
                <ul className="house-list">
                    {
                        this.state.houseList.map( (house) => 
                            <li key={house.id} className="house-item-wrapper">
                                <House house={house} />
                            </li>
                        )
                    }
                </ul>
            </div>
        );
    }
}

export default Search;