// src/App.jsx
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1 className="dashboard-title">FleetFlow Dashboard</h1>
        <div className="status-badge">
          <span className="status-dot"></span> System Live
        </div>
      </header>
    </div>
  );
}

export default App;