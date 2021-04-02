import React from 'react';

export default function Form() {
    return (
            <form name="contact_1" method="POST" action="/ContactUs:1" data-netlify="true" onSubmit="submit">
                <input type="hidden" name="form-name" value="contact_1" />
                <div>
                <label>Name
                <input id="name" name="name" type="text" required />     </label>               
                </div>
                    <button type="submit">Submit</button>
            </form>
    )

}