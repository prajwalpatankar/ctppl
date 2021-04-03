import React from 'react';



export default function Form() {
    const handleSubmit = e => {
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: {}
        })
          .then(() => alert("Success!"))
          .catch(error => alert(error));
  
        e.preventDefault();
      };

    return <div>
            <form name="contact" method="post" data-netlify="true" onSubmit={handleSubmit} data-netlify-honeypot="bot-field">
                <input type="hidden" name="form-name" value="contact" /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <p>
                <label>Name
                <input name="name" type="text" /></label>               
                </p>
                <button type="submit">Submit</button>
            </form>
    </div>

}