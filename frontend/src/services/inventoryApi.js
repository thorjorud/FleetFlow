import { BASE_URL } from './config.js';

const INVENTORY_URL = `${BASE_URL}/inventory`;

export const getInventory = async () => {
  const response = await fetch(INVENTORY_URL);
  if (!response.ok) {
    throw new Error('Failed to fetch inventory');
  }
  return await response.json();
};

export const deleteInventory = async (id) => {
  const response = await fetch(`${INVENTORY_URL}/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to delete item');
  }
  return await response.json();
};

export const addInventoryItem = async (itemData) => {
  const response = await fetch(INVENTORY_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(itemData),
  });

  if (!response.ok) {
    throw new Error('Failed to add inventory item');
  }

  return await response.json();
};

export const updateInventoryItem = async (id, itemData) => {
  const response = await fetch(`${INVENTORY_URL}/${id}`, {
    method: 'PUT', // or 'PATCH' depending on your backend route definition
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(itemData),
  });

  if (!response.ok) {
    throw new Error('Failed to update inventory item');
  }

  return await response.json();
};