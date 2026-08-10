import { useState } from 'react';
import { addInventoryItem } from '../services/inventoryApi';

export default function InventoryForm({ onItemAdded }) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [status, setStatus] = useState('In Stock');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !quantity) return;

    try {
      await addInventoryItem({
        name,
        quantity: parseInt(quantity, 10),
        status,
      });

      setName('');
      setQuantity('');
      setStatus('In Stock');

      if (onItemAdded) onItemAdded();
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="inventory-form">
      <h3 className="form-title">Add New Inventory Item</h3>
      <div className="form-inputs">
        <input
          type="text"
          className="form-input"
          placeholder="Item Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          className="form-input"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />
        <select
          className="form-select"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="In Stock">In Stock</option>
          <option value="Low Stock">Low Stock</option>
          <option value="Out of Stock">Out of Stock</option>
        </select>
        <button type="submit" className="submit-btn">
          Add Item
        </button>
      </div>
    </form>
  );
}