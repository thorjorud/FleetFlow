import pool from '../database/db.js';

const Inventory = {
    getAll: async () => {
        const query = `SELECT * FROM inventory ORDER BY id ASC`;
        const { rows } = await pool.query(query);
        return rows;
    },
    getById: async (id) => {
        const query = `SELECT * FROM inventory WHERE id = $1`;
        const values = [id];
        const { rows } = await pool.query(query, values);
        return rows[0];
    },
    create: async (name, quantity, status) => {
        const query = `INSERT INTO inventory (name, quantity, status) VALUES ($1, $2, $3) RETURNING *`;
        const values = [name, quantity, status || 'In Stock'];
        const { rows } = await pool.query(query, values);
        return rows[0];
    },
    update: async (id, name, quantity, status) => {
        const query = `UPDATE inventory SET name = $1, quantity = $2, status = $3 WHERE id = $4 RETURNING *`;
        const values = [name, quantity, status, id];
        const { rows } = await pool.query(query, values);
        return rows[0];
    },
    delete: async (id) => {
        const query = `DELETE FROM inventory WHERE id = $1 RETURNING *`;
        const values = [id];
        const { rows } = await pool.query(query, values);
        return rows[0];
    }
};

export default Inventory;