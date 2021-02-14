import React, { Component } from 'react';
import Footer from './sections/Footer';
import Services from './sections/Services';

class OurServices extends Component {
    render() {
        return (
            <div>
                <br /><br />
                <Services />
                <Footer />
            </div>
        );
    }
}

export default OurServices;