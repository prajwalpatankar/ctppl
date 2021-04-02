import React, { Component } from 'react';
import '../App.css';

class Job extends Component {
    constructor(props) {
        super(props);
        this.state = { isMobile: false };
        if (window.innerWidth < 1200) {
            this.state = { isMobile: true };
        }
    }
    componentDidMount() {
        window.addEventListener('resize', () => {   //check screensize
            this.setState({
                isMobile: window.innerWidth < 1200
            });
        }, false);
    }
    render() {
        return (
            <div data-aos="fade-up">
                <br />
                <div className="row vm-even">
                    <div className="col-lg-3"></div>
                    <div className="col-lg-6 ">
                        <h3 className="page-title" data-aos="zoom-in-up">Find your great role by joining Us !</h3>
                        <br />
                        <h6>We, Patankar's Creative Turnkey Projects Pvt Ltd. are leading service provider in the field of turnkey projects, Industrial structures, Residential buildings, Institutional Building, Pre-Engineering Buildings and MEP Works.
                            <br />Join us and have great career ahead!</h6>
                    </div>
                    <div className="col-lg-3"></div>
                </div>

                <div className="get-in-touch">
                    <form className="contact-form row">
                        <div className="form-field col-lg-6">
                            <input name="name" id="name" className="input-text js-input" type="text" required />
                            <label className="label" for="name">Name</label>
                        </div>
                        <div className="form-field col-lg-6 ">
                            <input name="email" id="email" className="input-text js-input" type="email" required />
                            <label className="label" for="email">E-mail</label>
                        </div>
                        <div className="form-field col-lg-6 ">
                            <input name="company" id="company" className="input-text js-input" type="text" required />
                            <label className="label" for="company">Experience (in years or Fresher)</label>
                        </div>
                        <div className="form-field col-lg-6 ">
                            <input name="phone" id="phone" className="input-text js-input" type="text" required />
                            <label className="label" for="phone">Contact Number</label>
                        </div>
                        <div className="form-field col-lg-12">
                            <input name="message" id="message" className="input-text js-input" type="text" required />
                            <label className="label" for="message">Message</label>
                        </div>
                        <div className="form-field col-lg-12">
                            <input className="submit-btn" type="submit" value="Submit" />
                        </div>
                    </form>
                </div>
                <br />
            </div>
        );
    }
}

export default Job;