import { useState, useEffect } from 'react';
import {
  getInventory,
  deleteInventory,
  updateInventoryItem,
} from '../services/inventoryApi';

export default function InventoryTable({ onDeleteSuccess, onUpdateSuccess }) {
  const [inventory, setInventory] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editFormData, setEditFormData] = useState({
    name: '',
    quantity: '',
    status: 'In Stock',
  });

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const data = await getInventory();
        setInventory(data);
      } catch (error) {
        console.error('Error fetching inventory:', error);
      }
    };
    fetchItems();
  }, []);

  const handleEditClick = (item) => {
    setEditingId(item.id);
    setEditFormData({
      name: item.name,
      quantity: item.quantity,
      status: item.status,
    });
  };

  const handleCancelClick = () => {
    setEditingId(null);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSaveClick = async (id) => {
    try {
      await updateInventoryItem(id, {
        name: editFormData.name,
        quantity: parseInt(editFormData.quantity, 10),
        status: editFormData.status,
      });
      setEditingId(null);
      if (onUpdateSuccess) onUpdateSuccess();
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteInventory(id);
      if (onDeleteSuccess) onDeleteSuccess();
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  return (
    <table className="inventory-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>ITEM NAME</th>
          <th>QUANTITY</th>
          <th>STATUS</th>
          <th>ACTIONS</th>
        </tr>
      </thead>
      <tbody>
        {inventory &&
          inventory.map((item) => (
            <tr key={item.id}>
              {editingId === item.id ? (
                <>
                  <td>{item.id}</td>
                  <td>
                    <input
                      type="text"
                      name="name"
                      value={editFormData.name}
                      onChange={handleEditChange}
                      className="form-input"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      name="quantity"
                      value={editFormData.quantity}
                      onChange={handleEditChange}
                      className="form-input"
                    />
                  </td>
                  <td>
                    <select
                      name="status"
                      value={editFormData.status}
                      onChange={handleEditChange}
                      className="form-select"
                    >
                      <option value="In Stock">In Stock</option>
                      <option value="Low Stock">Low Stock</option>
                      <option value="Out of Stock">Out of Stock</option>
                    </select>
                  </td>
                  <td>
                    <button
                      onClick={() => handleSaveClick(item.id)}
                      className="submit-btn"
                      style={{ marginRight: '6px', padding: '4px 10px' }}
                    >
                      Save
                    </button>
                    <button
                      onClick={handleCancelClick}
                      style={{
                        padding: '4px 10px',
                        borderRadius: '6px',
                        border: '1px solid #cbd5e1',
                        cursor: 'pointer',
                      }}
                    >
                      Cancel
                    </button>
                  </td>
                </>
              ) : (
                <>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>{item.status}</td>
                  <td>
                    <button
                      onClick={() => handleEditClick(item)}
                      style={{
                        marginRight: '8px',
                        padding: '4px 10px',
                        backgroundColor: '#2563eb',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '6px',
                        cursor: 'pointer',
                      }}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="delete-btn"
                      style={{
                        padding: '4px 10px',
                        backgroundColor: '#ef4444',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '6px',
                        cursor: 'pointer',
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </>
              )}
            </tr>
          ))}
      </tbody>
    </table>
  );
}