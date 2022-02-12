import React, { useState } from 'react';

function Contact(){
return <section id="contact">
<h2>Contact Me</h2>

<form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>


</section>
}

export default Contact;