import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
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
    </div>
  );
};

export default Sidebar;

---

.sidebar {
  width: 250px;
  background-color: #2c2c2c;
  color: white;
  padding: 20px;
}

.logo img {
  width: 100%;
  margin-bottom: 20px;
}

.search {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
}

.menu {
  margin-bottom: 20px;
}

.menu-item {
  padding: 10px;
  cursor: pointer;
}

.workspace, .data-source {
  margin-bottom: 20px;
}

.upload button {
  padding: 10px;
  background-color: #4a4a4a;
  color: white;
  border: none;
  cursor: pointer;
}

.terminal {
  margin-top: auto;
}

.omega-terminal {
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  width: 100%;
}

.footer {
  margin-top: 20px;
  text-align: center;
}