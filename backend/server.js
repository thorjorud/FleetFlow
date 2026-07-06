import express from 'express';
import inventoryRoutes from './routes/inventoryRoutes.js';

const app = express();
const PORT = 5000;

app.use(express.json());

app.use('/inventory', inventoryRoutes);

app.get('/', (req, res) => {
    res.send('Hello FleetFlow');
});

app.listen(PORT, () => {
    console.log(`Server is running smoothly on port ${PORT}`);
});