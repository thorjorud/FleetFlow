import pool from '../database/db.js';

const Delivery = {
    getAll: async () => {
        const query_text = 'SELECT * FROM deliveries ORDER BY id ASC';
        const result = await pool.query(query_text);
        return result.rows;
    },

    getById: async (id) => {
        const query_text = 'SELECT * FROM deliveries WHERE id = $1';
        const values = [id];
        const { rows } = await pool.query(query_text, values);
        return rows[0];
    },

    updateStatus: async (id, status) => {
        const query_text = 'UPDATE deliveries SET status = $1 WHERE id = $2 RETURNING *';
        const values = [status, id];
        const { rows } = await pool.query(query_text, values);
        return rows[0];
    }
};

export default Delivery;