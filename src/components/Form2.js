import React from 'react';

export default function Form2() {
    <form name="contact2" netlify netlify-honeypot="bot-field" hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="text" name="phone" />
        <input type="text" name="company" />
        <input type="text" name="message" />
    </form>
    return <div className="get-in-touch">
        <form name="contact" data-netlify="true" method="post" className="contact-form row" data-aos="fade-up"  onSubmit="submit">
            <div className="form-field col-lg-6">
                <input type="hidden" name="form-name" value="contact2" />
            </div>
            <div className="form-field col-lg-6"> </div>
            <div className="form-field col-lg-6">
                <label className="label" htmlFor="name">Name</label>
                <input name="name" id="name" className="input-text js-input" type="text" required />
            </div>
            <div className="form-field col-lg-6 ">
                <label className="label" htmlFor="email">E-mail</label>
                <input name="email" id="email" className="input-text js-input" type="email" required />
            </div>
            <div className="form-field col-lg-6 ">
                <label className="label" htmlFor="phone">Contact Number</label>
                <input name="phone" id="phone" className="input-text js-input" type="text" required />
            </div>
            <div className="form-field col-lg-6 ">
                <label className="label" htmlFor="company">Experience (in years or Fresher)</label>
                <input name="company" id="company" className="input-text js-input" type="text" required />
            </div>
            <div className="form-field col-lg-12">
                <label className="label" htmlFor="message">Expectations</label>
                <input name="message" id="message" className="input-text js-input" type="text" required />
            </div>
            <div className="form-field col-lg-12">
                <button className="submit-btn" type="submit">Submit</button>
            </div>
        </form>
    </div>

}