import React, { useState } from 'react';
import logo from './Logo.png';
import davisPic from './davisBigBeard.jpg';
import Nav from './Nav.js'



function Header() {
return <header>
        <p>{Nav} </p>
        <img src={logo} alt="Logo" /> 
        <img src={davisPic} alt="Davis Pic" />
        
 </header> 
}

export default Header;
