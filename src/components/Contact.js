import React, { Component } from 'react';
import Form1 from './Form1';
import '../App.css'

// const encode = (data) => {
//     return Object.keys(data)
//         .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
//         .join("&");
// }

class Contact extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { name: "", email: "", phone: "", company: "", message: "" };
    // }
    
    // handleSubmit = e => {
    //     console.log(this.state)
    //     fetch("/", {
    //       method: "POST",
    //       headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //       body: encode({ "form-name": "contact", ...this.state })
    //     })
    //       .then(() => alert("Your response was submitted. Thank you!"))
    //       .catch(error => alert(error));
  
    //     e.preventDefault();
    // };

    // handleChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        //const { name, email, phone, company, message } = this.state;
        return (
            <div ><br /><br />
                <div className="row"> 
                    <div className="col-md-2" >
                        <p>&nbsp;</p>
                    </div>
                    <div className="col-md-4" data-aos="fade-right">
                        <br />
                        <h3>Address</h3>
                        <p>Spandan office no.8, above state bank of india,<br />opp. mai mangeshkar hospital,<br />Mumbai Bengluru bypass,<br />Warje, Pune, Maharashtra 411058</p>
                        <br />
                        <h3>Working Hours</h3>
                        <p>10.00 am to 7.00 pm<br />Monday to Saturday</p>
                        <br />
                        <h3>Contact Details </h3>
                        <p><strong>Phone:</strong> +91-9767726744<br /><strong>Email:</strong> prakash.patankar@ctppl.com <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; aniket.patankar@ctppl.com</p>


                    </div>
                    <div className="col-md-4" data-aos="fade-left">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.97003433908!2d73.79597441489224!3d18.48501648742969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfd3849df21d%3A0x299ed1dd59ae92fa!2sCreative%20Turnkey%20Projects%20Pvt%2C%20Ltd!5e0!3m2!1sen!2sin!4v1613312060951!5m2!1sen!2sin" width="600" height="450" frameborder="0" title="PCTPPL" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </div>
                    <div className="col-md-2">
                        <p>&nbsp;</p>
                    </div>
                </div>
                <br /><br />
                <hr />

                <div className="section-title" data-aos="fade-up">
                    <h3 className="page-title ">Still have Doubt ?</h3>
                    <h6 className="title-description">Fill in your details and we'll get back to you shortly</h6>
                </div>
                <br />
                <Form1 />
                {/* <div className="get-in-touch">
                    <form name="contact_1" className="contact-form row" data-aos="fade-up" data-netlify="true" onSubmit={this.handleSubmit}>

                        <div className="form-field col-lg-6">
                            <input type="hidden" name="form-name" value="contact_1" />
                        </div>
                        <div className="form-field col-lg-6"> </div>
                        <div className="form-field col-lg-6">
                            <label className="label" htmlFor="name">Name</label>
                            <input name="name" id="name" value={name} onChange={this.handleChange} className="input-text js-input" type="text" required />
                        </div>
                        <div className="form-field col-lg-6 ">
                            <label className="label" htmlFor="email">E-mail</label>
                            <input name="email" id="email" value={email} onChange={this.handleChange} className="input-text js-input" type="email" required />
                        </div>
                        <div className="form-field col-lg-6 ">
                            <label className="label" htmlFor="phone">Contact Number</label>
                            <input name="phone" id="phone" value={phone} onChange={this.handleChange} className="input-text js-input" type="text" required />
                        </div>
                        <div className="form-field col-lg-6 ">
                            <label className="label" htmlFor="company">City</label>
                            <input name="company" id="company" value={company} onChange={this.handleChange} className="input-text js-input" type="text" required />
                        </div>
                        <div className="form-field col-lg-12">
                            <label className="label" htmlFor="message">Particular</label>
                            <input name="message" id="message" value={message} onChange={this.handleChange} className="input-text js-input" type="text" required />
                        </div>
                        <div className="form-field col-lg-12">
                            <input className="submit-btn" type="submit" value="Submit" />
                        </div>
                    </form>
                </div> */}
            </div>
        );
    }
}

export default Contact;