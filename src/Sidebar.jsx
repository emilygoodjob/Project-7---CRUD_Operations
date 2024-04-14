import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/" className="sidebar-link">Home</Link></li>
        <li><Link to="/create-crewmate" className="sidebar-link">Create a Crewmate</Link></li>
        <li><Link to="/crewmate-gallery" className="sidebar-link">Crewmate Gallery</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
