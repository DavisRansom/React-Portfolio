import React, { useState } from 'react';

function Contact(){
return <section id="contact">
<h2>Contact Me</h2>

<form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <label>
    Email Address:
    <input type="text" name="email" />
  </label>
  <label>
    Message:
    <input type="text" name="message" />
  </label>
  <input type="submit" value="Submit" />
</form>


</section>
}

export default Contact;