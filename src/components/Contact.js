import React, { Component } from 'react';
import '../App.css'

class Contact extends Component {
    render() {
        return (
            <div data-aos="fade-up">
                <div className="row">
                    <div className="col-md-2">
                        <p>&nbsp;</p>
                    </div>
                    <div className="col-md-4">
                        <br />
                        <h3>Address</h3>
                        <p>Spandan office no.8, above state bank of india,<br />opp. mai mangeshkar hospital,<br />Mumbai Bengluru bypass,<br />Warje, Pune, Maharashtra 411058</p>
                        <br />
                        <h3>Working Hours</h3>
                        <p>10.00 am to 7.00 pm<br />Monday to Saturday</p>
                        <br />
                        <h3>Contact Details </h3>
                        <p><strong>Phone:</strong> +91-9767726744<br /><strong>Email:</strong> prakash.patankar@ctppl.com</p>


                    </div>
                    <div className="col-md-4">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.97003433908!2d73.79597441489224!3d18.48501648742969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfd3849df21d%3A0x299ed1dd59ae92fa!2sCreative%20Turnkey%20Projects%20Pvt%2C%20Ltd!5e0!3m2!1sen!2sin!4v1613312060951!5m2!1sen!2sin" width="600" height="450" frameborder="0" title="PCTPPL" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </div>
                    <div className="col-md-2">
                        <p>&nbsp;</p>
                    </div>
                </div>
                <br />
                <hr />

                <div className="section-title" data-aos="fade-up">
                    <h3 className="page-title ">Still have Doubt ?</h3>
                    <h6 className="title-description">Fill in your details and we'll get back to you shortly</h6>
                </div>
                <br />
                <div className="get-in-touch">
                    <form className="contact-form row" data-aos="fade-up">
                        <div className="form-field col-lg-6">
                            <input id="name" className="input-text js-input" type="text" required />
                            <label className="label" for="name">Name</label>
                        </div>
                        <div className="form-field col-lg-6 ">
                            <input id="email" className="input-text js-input" type="email" required />
                            <label className="label" for="email">E-mail</label>
                        </div>
                        <div className="form-field col-lg-6 ">
                            <input id="phone" className="input-text js-input" type="text" required />
                            <label className="label" for="phone">Contact Number</label>
                        </div>
                        <div className="form-field col-lg-6 ">
                            <input id="company" className="input-text js-input" type="text" required />
                            <label className="label" for="company">City</label>
                        </div>
                        <div className="form-field col-lg-12">
                            <input id="message" className="input-text js-input" type="text" required />
                            <label className="label" for="message">Particular</label>
                        </div>
                        <div className="form-field col-lg-12">
                            <input className="submit-btn" type="submit" value="Submit" />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Contact;