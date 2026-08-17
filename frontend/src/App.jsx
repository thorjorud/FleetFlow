import React, { useState } from 'react';
import './App.css';
import InventoryTable from './components/InventoryTable';
import InventoryForm from './components/InventoryForm';
import DeliveryDashboard from './components/DeliveryDashboard';

function App() {
    const [refreshKey, setRefreshKey] = useState(0);

    const handleItemAdded = () => {
        setRefreshKey((prevKey) => prevKey + 1);
    };

    return (
        <div className="dashboard-container">
            <header className="dashboard-header">
                <h1 className="dashboard-title">FleetFlow Dashboard</h1>
                <div className="status-badge">
                    <span className="status-dot"></span> System Live
                </div>
            </header>

            <main className="dashboard-content">
                <InventoryForm onItemAdded={handleItemAdded} />
                <InventoryTable 
                    key={refreshKey}
                    onDeleteSuccess={handleItemAdded}
                    onUpdateSuccess={handleItemAdded}
                />
                <DeliveryDashboard />
            </main>
        </div>
    );
}

export default App;