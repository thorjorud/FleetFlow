import React, { useState, useEffect } from 'react';
import { getDeliveries, updateDeliveryStatus } from '../services/deliveriesApi';

const DeliveryDashboard = () => {
    const [deliveries, setDeliveries] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        loadDeliveries();
    }, []);

    const loadDeliveries = async () => {
        try {
            const data = await getDeliveries();
            setDeliveries(data);
        } catch (err) {
            setError(err.message);
        }
    };

    const handleStatusChange = async (id, newStatus) => {
        try {
            await updateDeliveryStatus(id, newStatus);
            loadDeliveries();
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="delivery-dashboard">
            <h2>Delivery Dashboard</h2>
            {error && <p className="error-message">Error: {error}</p>}
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Route ID</th>
                        <th>Address</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {deliveries.map((delivery) => (
                        <tr key={delivery.id}>
                            <td>{delivery.id}</td>
                            <td>{delivery.route_id}</td>
                            <td>{delivery.address}</td>
                            <td>
                                <span className={`status-${delivery.status.toLowerCase()}`}>
                                    {delivery.status}
                                </span>
                            </td>
                            <td>
                                <select 
                                    value={delivery.status} 
                                    onChange={(e) => handleStatusChange(delivery.id, e.target.value)}
                                >
                                    <option value="Pending">Pending</option>
                                    <option value="Delivered">Delivered</option>
                                    <option value="Failed">Failed</option>
                                </select>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DeliveryDashboard;