import pool from '../database/db.js';

const Route = {
    getAll: async () => {
        const query = 'SELECT * FROM routes ORDER BY id ASC';
        const { rows } = await pool.query(query);
        return rows;
    },

    getById: async (id) => {
        const query = 'SELECT * FROM routes WHERE id = $1';
        const values = [id];
        const { rows } = await pool.query(query, values);
        return rows[0];
    },

    create: async (routeNumber, status) => {
        const query = `INSERT INTO routes (route_number, status) VALUES ($1, $2) RETURNING *`;
        const values = [routeNumber, status || 'Pending'];
        const { rows } = await pool.query(query, values);
        return rows[0];
    },

    updateStatus: async (id, status) => {
        const query = `UPDATE routes SET status = $1 WHERE id = $2 RETURNING *`;
        const values = [status, id];
        const { rows } = await pool.query(query, values);
        return rows[0];
    },

    delete: async (id) => {
        const query = `DELETE FROM routes WHERE id = $1 RETURNING *`;
        const values = [id];
        const { rows } = await pool.query(query, values);
        return rows[0];
    }
}

export default Route;