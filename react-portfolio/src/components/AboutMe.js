import React, { useState } from 'react';
import davisHappy from './davisHappy.jpg';


function AboutMe(){
    return <section id="aboutMe">

        <img src={davisHappy} alt="Davis Happy" />
        <p>
            Davis Ransom is a web developer.
        </p>

    </section>
}

export default AboutMe;