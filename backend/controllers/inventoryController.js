import Inventory from '../models/inventoryModel.js';

export const getInventoryById = async (req, res) => {
    try {
        const { id } = req.params;
        const item = await Inventory.getById(id);
        if (!item) {
            return res.status(404).json({ error: 'Inventory item not found' });
        }
        res.json(item);
    } catch (err) {
        console.error('Error executing query:', err.stack);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
export const getInventory = async (req, res) => {
    try {
        const items = await Inventory.getAll();
        res.json(items);
    } catch (err) {
        console.error('Error executing query:', err.stack);
        res.status(500).json({ error: 'Internal Server Error'});
    }
};

export const addInventoryItem = async (req, res) => {
    try {
        const {name, quantity, status} = req.body;
        const newItem = await Inventory.create(name, quantity, status);
        res.status(201).json(newItem);
    } catch (err) {
        console.error('Error executing query:', err.stack);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const updateInventoryItem = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, quantity, status } = req.body;

        const updatedItem = await Inventory.update(id, name, quantity, status);

        if (!updatedItem) {
            return res.status(404).json({ error: 'Inventory item not found' });
        }

        res.json(updatedItem);
    } catch (err) {
        console.error('Error executing query:', err.stack);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const deleteInventoryItem = async (req, res) => {
    try {
        const { id } = req.params;
        
        const deletedItem = await Inventory.delete(id);

        if (!deletedItem) {
            return res.status(404).json({ error: 'Inventory item not found' });
        }

        res.json({ message: 'Item deleted successfully', deletedItem: deletedItem });
    } catch (err) {
        console.error('Error executing query:', err.stack);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};