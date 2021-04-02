import React from 'react';

export default function Form() {
    return (
        <div data-aos="fade-up">
            <form name="contact_1" method="post" data-netlify="true" onSubmit="submit" className="contact-form row">
                <input type="hidden" name="form-name" value="contact_1" /> <br />
                <div  className="col-lg-6">
                <label className="label" htmlFor="name">Name</label>
                <input id="name" name="name" type="text" required />                    
                </div>
                <div  className="col-lg-6 ">
                    <label className="label" htmlFor="email">E-mail</label>
                    <input id="email" name="email" type="email" required />
                </div>
                <div  className="col-lg-6 ">
                    <label className="label" htmlFor="phone">Contact Number</label>
                    <input id="phone" name="phone" type="text" required />
                </div>
                <div  className="col-lg-6 ">
                    <label className="label" htmlFor="company">City</label>
                    <input id="company" name="company" type="text" required />
                </div>
                <div  className="col-lg-12">
                    <label className="label" htmlFor="message">Particular</label>
                    <input id="message" name="message" type="text" required />
                </div>
                <div  className="col-lg-12">
                    <button className="submit-btn" type="submit">Submit</button>
                </div>
            </form>
        </div>
    )

}