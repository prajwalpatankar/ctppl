import React from 'react';

export default function Form1() {
    // const handleSubmit = e => {
    //     fetch("/", {
    //       method: "POST",
    //       headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //       body: {},
    //     })
    //       .then(() => alert("Success!"))
    //       .catch(error => alert(error));
  
    //     e.preventDefault();
    //   };
    <form name="contact" netlify netlify-honeypot="bot-field" hidden>
        <input type="text" name="name" />
    </form>
    return <div>
            <form name="contact" method="post" data-netlify="true" onSubmit="submit">
                <input type="hidden" name="form-name" value="contact" /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <div>
                <label>Name
                    <input name="name" type="text" />
                </label>               
                </div>
                <button type="submit">Submit</button>
            </form>
    </div>

}