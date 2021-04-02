import React from 'react';

export default function Form() {
    return (
        <div className="get-in-touch" data-aos="fade-up">
            <form name="contact_1" method="post" data-netlify="true" onSubmit="submit" className="contact-form row">
                <input type="hidden" name="form-name" value="contact_1" /> <br />
                <div className="form-field col-lg-6">
                    <input name="name" className="input-text js-input" type="text" required />
                    <label className="label" htmlFor="name">Name</label>
                </div>
                <div className="form-field col-lg-6 ">
                    <input name="email"className="input-text js-input" type="email" required />
                    <label className="label" htmlFor="email">E-mail</label>
                </div>
                <div className="form-field col-lg-6 ">
                    <input name="phone" className="input-text js-input" type="text" required />
                    <label className="label" htmlFor="phone">Contact Number</label>
                </div>
                <div className="form-field col-lg-6 ">
                    <input name="company" className="input-text js-input" type="text" required />
                    <label className="label" htmlFor="company">City</label>
                </div>
                <div className="form-field col-lg-12">
                    <input name="message" className="input-text js-input" type="text" required />
                    <label className="label" htmlFor="message">Particular</label>
                </div>
                <div className="form-field col-lg-12">
                    <button className="submit-btn" type="submit">Submit</button>
                </div>
            </form>
        </div>
    )

}