import React from 'react';
import './Sidebar.css';
import RegisterComponent from './RegisterComponent';

const Sidebar = () => {
  const addNumbers = (a, b) => {
    return a + b;
  };

  return (
    <div className="sidebar">
      <div className="logo">
        <img src="logo.png" alt="Logo" />
      </div>
      <input type="text" placeholder="Search" className="search" />
      <div className="menu">
        <div className="menu-item">Dashboard</div>
        <div className="menu-item">Templates</div>
      </div>
      <div className="workspace">
        <h3>MY WORKSPACE</h3>
        <div>No projects available</div>
      </div>
      <div className="data-source">
        <h3>DATA SOURCE IN...</h3>
        <div className="upload">
          <button>File Upload</button>
        </div>
      </div>
      <div className="terminal">
        <button className="omega-terminal">Omega Terminal</button>
        <div className="support">
          <span>Email: chetan@omegaintelligence.org</span>
          <span>for support.</span>
        </div>
      </div>
      <div className="footer">
        <span>Icons</span>
      </div>
      <RegisterComponent />
    </div>
  );
};

export default Sidebar;