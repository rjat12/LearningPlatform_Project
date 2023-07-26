import React from 'react';
import Navbar from './Navbar'
import logo from '../images/logo1.jpg'
function Thome(){
    const imageStyle = {
        width: '80px',
        height: '25px',
        position: 'relative',
        left: '10px', 
      };
    return (
        <div>
            <img src={logo} alt='' style={imageStyle} />
        </div>
    )
}

export default Thome;