import React, { Component } from 'react';
import Counts from './sections/Counts';
import About from './sections/About';
import Footer from './sections/Footer';

class AboutUs extends Component {
    render() {
        return (
            <div>
                <br /><br /><br />
                <About />
                <Counts />
                <Footer />
            </div>
        );
    }
}

export default AboutUs;