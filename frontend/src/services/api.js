const API_URL = 'http://localhost:5000/api/inventory';

export const getInventory = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Failed to fetch inventory');
  }
  return await response.json();
};

export const deleteInventory = async (id) => {
  const response = await fetch(`http://localhost:5000/api/inventory/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to delete item');
  }
  return await response.json();
};