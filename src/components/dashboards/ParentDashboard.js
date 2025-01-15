import React from "react";

import './ParentDashboard.css';
import Sidebar from './Sidebar';
import TopNav from './TopNav';
import DashboardContent from './DashboardContent';

function ParentDashboard() {
  return (
    <div className="App">
      <Sidebar />
      <div className="main-content">
        <TopNav />
        <DashboardContent />
      </div>
    </div>
  );
}

export default ParentDashboard;