import React from 'react';
import DavisBigBeard from './davisBigBeard.jpg';

function Contact(){
return <section id="contact">
<h2>Contact Me</h2>
<img src={DavisBigBeard} alt="DavisBigBeard"/>

<form>
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required/>

  <label for="email">Email Address:</label>
  <input type="email" id="email" pattern="[A-Za-z0-9\._%+-]+@[A-Za-z0-9\.-]+\.[A-Za-z]{2,}" size="30" required />

  <label for="message">Message:</label>
  <input type="text" id="message" name="message" required/>

  <input type="submit" value="Submit" />
</form>


</section>
}

export default Contact;