import React, { Component } from 'react';
import Header from './common/Header';
import Footer from './common/Footer';
import Newsletter from './common/Newsletter';
import Home from './pages/Home';

{ /* TODO: - Separate components after initial page is up*
           - Don't forget the newsletter modal!
           - Should we add redux here as well? */}
class App extends Component {
    render() {
        return (
            <div className="wrapper">
                <Header />
                <Home />
                <Newsletter sticky />
                <Footer />
            </div>
        );
    }
}

export default App;
