import React from 'react';

export default function Form() {
    return (
            <form name="contact" method="post" data-netlify="true" onSubmit="submit">
                <input type="hidden" name="form-name" value="contact" /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <div>
                <label>Name
                <input id="name" name="name" type="text" required /></label>               
                </div>
                <button type="submit">Submit</button>
            </form>
    )

}