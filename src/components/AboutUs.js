import React, { Component } from 'react';
import Counts from './sections/Counts';
import About from './sections/About';
import Video from './sections/Video';

class AboutUs extends Component {
    render() {
        return (
            <div>
                <br /><br /><br />
                <About />
                <Counts />
                <Video />
            </div>
        );
    }
}

export default AboutUs;