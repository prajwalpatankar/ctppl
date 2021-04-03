import React from 'react';

export default function Form() {
    return <div>
            <form name="contact" method="post" netlify onSubmit="submit" netlify-honeypot="bot-field">
                <input type="hidden" name="form-name" value="contact" /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <p>
                <label>Name
                <input name="name" type="text" /></label>               
                </p>
                <button type="submit">Submit</button>
            </form>
    </div>

}