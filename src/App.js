import React, { Component } from 'react';
import Header from './common/Header';
import Footer from './common/Footer';
import Newsletter from './common/Newsletter';
import Home from './pages/Home';
import SearchForm from './sections/SearchForm';

class App extends Component {
    constructor(props) {
        super(props);
        
        this.toggleSearch = this.toggleSearch.bind(this);
        this.toggleSidebar = this.toggleSidebar.bind(this);
        this.updateFilter = this.updateFilter.bind(this);
        
        this.state = {
            openSearch: false,
            openSidebar: false,
            setFilter: false,
            searchFilter: { }
        }
    }
    
    toggleSearch(e) {
        this.setState( () => { 
            return {
                openSearch: !this.state.openSearch
            }
        });
    }
    
    toggleSidebar(e) {
        this.setState( () => { 
            return {
                openSidebar: !this.state.openSidebar
            }
        });
    }
    
    updateFilter(key, value) {        
        // For first-time filtering, set this into true
        this.setState( () => {
            return {
                setFilter: true
            }
        });
        
        // Update key if exists; otherwise, add new key
        let currentKeys = Object.keys(this.state.searchFilter);
        
        if (currentKeys.length === 0) {
            this.setState( () => {
                return {
                    searchFilter: { [key]: value }
                }
            });
        } else {
            let currentFilter = this.state.searchFilter;
            currentFilter[key] = value;
            
            this.setState( () => {
                return {
                    searchFilter: currentFilter
                }
            });
        }
    }
    
    render() {
        return (
            <div>
                <div className="wrapper">
                    <Header updateFilter={this.updateFilter} />
                    <SearchForm updateFilter={this.updateFilter}/>
                    <Home 
                        searchFilter={this.state.searchFilter} 
                        setFilter={this.state.setFilter}
                        updateFilter={this.updateFilter}
                        />
                    <Newsletter sticky />
                    <Footer />
                </div>
            </div>
        );
    }
}

export default App;
