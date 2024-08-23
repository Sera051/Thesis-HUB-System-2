import React from 'react';
import './SidebarUsers.css';

const Sidebar = ({ isVisible }) => {
  return (
    <div className={`sidebar ${isVisible ? 'visible' : 'hidden'}`}>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#profile">Profile</a></li>
        <li><a href="#mylib">My Library</a></li>
        <li><a href="#settins">Settings</a></li>
        <li><a href="#logout">Logout</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
