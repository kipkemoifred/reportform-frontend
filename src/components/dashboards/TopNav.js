import React from 'react';
import './TopNav.css';

const TopNav = () => {
  return (
    <div className="top-nav">
      {/* <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div> */}
      <div className="user-profile">
        <span>Welcome, User</span>
        <img src="https://www.w3schools.com/w3images/avatar2.png" alt="Profile" className="profile-pic" />
      </div>
    </div>
  );
}

export default TopNav;
