import React from 'react';

export default function Form() {
    return (
        <div>
            <form name="contact_1" method="POST" action="/ContactUs:1" data-netlify="true" onSubmit="submit">
                <input type="hidden" name="form-name" value="contact_1" />
                <div>
                <label>Name
                <input id="name" name="name" type="text" required />     </label>               
                </div>
                <div>
                    <label>E-mail
                    <input id="email" name="email" type="email" required /></label>
                </div>
                <div>
                    <label>Contact Number
                    <input id="phone" name="phone" type="text" required /></label>
                </div>
                <div>
                    <label>City
                    <input id="company" name="company" type="text" required /></label>
                </div>
                <div>
                    <label>Particular
                    <input id="message" name="message" type="text" required /></label>
                </div>
                    <button type="submit">Submit</button>
            </form>
        </div>
    )

}