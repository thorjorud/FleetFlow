import express from 'express';
import inventoryRoutes from './routes/inventoryRoutes.js';
import routeRoutes from './routes/routeRoutes.js';
import deliveriesRoutes from './routes/deliveriesRoutes.js';

const app = express();
const PORT = 5000;

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