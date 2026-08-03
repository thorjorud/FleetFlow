import express from 'express';
import cors from 'cors';
import inventoryRoutes from './src/routes/inventoryRoutes.js';
import routeRoutes from './src/routes/routeRoutes.js';
import deliveriesRoutes from './src/routes/deliveriesRoutes.js';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use('/api/deliveries', deliveriesRoutes);
app.use('/api/routes', routeRoutes);
app.use('/api/inventory', inventoryRoutes);

app.get('/', (req, res) => {
    res.send('Hello FleetFlow');
});

app.listen(PORT, () => {
    console.log(`Server is running smoothly on port ${PORT}`);
});