import React, { useState } from 'react';
import davisHappy from './davisHappy.jpg';


function AboutMe(){
    return <section id="aboutMe">
        <h2>About Me</h2>
        <img src={davisHappy} alt="Davis Happy" />
        <p>
            Davis Ransom is a web developer from Hunting Beach, California. I love volleyball, my wife Emily, video games, Korean Barbeque, writing, building Legos, watching movies, and recording my podcasts. I am a unique prospect as an employee, since I am positioned as an expert in certain areas (leadership, team building, business management, setting and achieving goals), but I am a relative newb (graduating from UCSD Full-stack Bootcamp on March 7th 2022!) in technology and I am willing to do nearly anything to get my foot in the door. I know once I do, that the sky is the limit!
        </p>

    </section>
}

export default AboutMe;