import React, { useState } from 'react';
import logo from './Logo.png';
import davisPic from './davisBigBeard.jpg';



function Header() {
return <header>
        <img src={logo} alt="Logo" /> 
        <img src={davisPic} alt="Davis Pic" />
 </header> 
}

export default Header;
