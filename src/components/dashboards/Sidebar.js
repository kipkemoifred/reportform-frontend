import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">Fees and Marks Dashboard</div>
      <ul className="menu">
        <li>Dashboard</li>
        <li>Reports</li>
        <li>Analytics</li>
        <li>Settings</li>
        <li>Logout</li>
      </ul>
    </div>
  );
}

export default Sidebar;
