import React from "react";
import linkedInPic from "./Linkedin-logo-png-white.png";
import gitHubPic from "./kindpng_1280233.png";

function Footer() {
  return (
    <footer>
      <h2>How To Contact Davis</h2>
      <p>619.204.2957</p>
      <p>davis.ransom.tech@gmail.com</p>

      <a href="https://www.linkedin.com/in/davis-ransom-499b31210/">
        Linked In </a>
        <img src={linkedInPic} alt="Linked In" />
        
      <a href="https://github.com/DavisRansom">Github Profile Page </a>
      <img src={gitHubPic} alt="GitHub" />

      <p>Created by Davis Ransom in January 2022</p>
    </footer>
  );
}

export default Footer;
