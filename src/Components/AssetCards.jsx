

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AssetCards = () => {
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8081/api/assets')

      .then((response) => {
        setAssets(response.data);
      })
      .catch((error) => {
        console.error('Error fetching assets:', error);
      });
  }, []);
  const hStyle = {
    textAlign :'center'
  };
  const symbolsContainerStyle = {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '10px',
  };

  
  const symbolStyle = {
    fontSize: '20px',
    marginLeft: '4px',
  };
  return (
    <div className="scrollable-section">
      {assets.map((asset) => (
        <div key={asset.id} className="card">
          <img src={asset.url} alt={asset.name} />
          <h3 style={hStyle}>{asset.name}</h3>
          <div style={symbolsContainerStyle}>
        <span style={symbolStyle}>   ❤️ 🚀 💬  </span> 
     
      </div>
      </div>
      ))}
    </div>
  );
};

export default AssetCards;
