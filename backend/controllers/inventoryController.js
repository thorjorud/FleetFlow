import pool from '../database/db.js';

export const getInventory = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM inventory ORDER BY id ASC');
        res.json(result.rows);    
    } catch (err) {
        console.error('Error executing query:', err.stack);
        res.status(500).json({ error: 'Internal Server Error'});
    }
};

export const addInventoryItem = async (req, res) => {
    try {
        const {name, quantity, status} = req.body;
        const result = await pool.query(
            'INSERT INTO inventory (name, quantity, status) VALUES ($1, $2, $3) RETURNING *', [name, quantity, status]);
            res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error('Error executing query:', err.stack);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const updateInventoryItem = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, quantity, status } = req.body;

        const result = await pool.query(
            'UPDATE inventory SET name = $1, quantity = $2, status = $3 WHERE id = $4 RETURNING *',
            [name, quantity, status, id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Inventory item not found' });
        }

        res.json(result.rows[0]);
    } catch (err) {
        console.error('Error executing query:', err.stack);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const deleteInventoryItem = async (req, res) => {
    try {
        const { id } = req.params;
        
        const result = await pool.query('DELETE FROM inventory WHERE id = $1 RETURNING *', [id]);

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Inventory item not found' });
        }

        res.json({ message: 'Item deleted successfully', deletedItem: result.rows[0] });
    } catch (err) {
        console.error('Error executing query:', err.stack);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};