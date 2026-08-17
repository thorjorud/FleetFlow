import { BASE_URL } from './config.js';

const DELIVERIES_URL = `${BASE_URL}/deliveries`;

export const getDeliveries = async () => {
    const response = await fetch(DELIVERIES_URL);
    if (!response.ok) {
        throw new Error('Failed to fetch deliveries');
    }
    return await response.json();
};

export const updateDeliveryStatus = async (id, status) => {
    const response = await fetch(`${DELIVERIES_URL}/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status }),
    });
    
    if (!response.ok) {
        throw new Error('Failed to update delivery status');
    }
    
    return await response.json();
};