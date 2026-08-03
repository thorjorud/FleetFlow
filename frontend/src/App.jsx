import React from 'react';
import './App.css';
import InventoryTable from './components/InventoryTable';

function App() {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1 className="dashboard-title">FleetFlow Dashboard</h1>
        <div className="status-badge">
          <span className="status-dot"></span> System Live
        </div>
      </header>

      <main className="dashboard-content">
        <InventoryTable />
      </main>

    </div>
  );
}

export default App;