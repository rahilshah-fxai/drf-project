import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src="logo.png" alt="Logo" />
      </div>
      <div className="search">
        <input type="text" placeholder="Search" />
      </div>
      <div className="menu">
        <div className="menu-item active">Dashboard</div>
        <div className="menu-item">Templates</div>
      </div>
      <div className="workspace">
        <h3>MY WORKSPACE</h3>
        <button className="add-button">+</button>
        <p>No projects available</p>
      </div>
      <div className="data-source">
        <h3>DATA SOURCE IN…</h3>
        <div className="upload">
          <span>File Upload</span>
          <i className="upload-icon">🔄</i>
        </div>
      </div>
      <div className="footer">
        <div className="terminal">Omega Terminal</div>
        <div className="support">
          <p>Email: chetan@omegaintelligence.org for support.</p>
        </div>
        <div className="icons">
          <i className="icon-email">📧</i>
          <i className="icon-calendar">📅</i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

---

/* Sidebar.css */
.sidebar {
  width: 250px;
  background: #121212;
  color: #ffffff;
  padding: 20px;
}

.logo img {
  width: 100%;
}

.search input {
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

.menu-item.active {
  background: #1c1c1c;
}

.workspace {
  margin-bottom: 20px;
}

.add-button {
  margin-left: 10px;
}

.data-source {
  margin-bottom: 20px;
}

.upload {
  display: flex;
  align-items: center;
}

.upload-icon {
  margin-left: 10px;
}

.footer {
  position: absolute;
  bottom: 20px;
}

.icons {
  display: flex;
  gap: 10px;
}