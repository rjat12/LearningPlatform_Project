

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Layout.css'; 
import AssetCards from './AssetCards';
import AssetCards1 from './AssetCards1';
import AssetCards3 from './AssetCards3';
const Layout = () => {
  

  return (
    <div className="layout">
      <div className="section">
        <h3>Growing in the Profession</h3>
        <div className="scrollable-content">
        <AssetCards />
        </div>
      </div>
      <hr className="horizontal-line" />
      <div className="section">
        <h3>Managing the production</h3>
        <div className="scrollable-content">
        <AssetCards1 />
        </div>
      </div>
      <hr className="horizontal-line" />
      <div className="section">
        <h3>Soft skills for project Management</h3>
        <div className="scrollable-content">
        <AssetCards3 />
        </div>
      </div>
    </div>
  );
};

export default Layout;
