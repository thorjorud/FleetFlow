const pool = require('./database/db');
const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello FleetFlow');
});

app.get('/inventory', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM inventory ORDER BY id ASC');
        res.json(result.rows);    
    } catch (err) {
        console.error('Error executing query:', err.stack);
        res.status(500).json({ error: 'Internal Server Error'});
    }
});

app.post('/inventory', async (req, res) => {
    try {
        const {name, quantity, status} = req.body;
        const result = await pool.query(
            'INSERT INTO inventory (name, quantity, status) VALUES ($1, $2, $3) RETURNING *', [name, quantity, status]);
            res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error('Error executing query:', err.stack);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running smoothly on port ${PORT}`);
});