

import React from 'react';
import './Footer.css';
import logo from '../images/logo.png';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo">
       
        <img src={logo} alt="Logo" />
      </div>
      <div className="sentence">
        <p>2023 @ Osmosis Learning</p>
      </div>
    </footer>
  );
};

export default Footer;
