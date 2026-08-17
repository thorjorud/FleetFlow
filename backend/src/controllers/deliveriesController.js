import Delivery from '../models/deliveryModel.js';

export const getAllDeliveries = async (req, res) => {
    try {
        const deliveries = await Delivery.getAll();
        res.status(200).json(deliveries);
    } catch (err) {
        console.error('Error executing query:', err.stack);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const getDeliveryById = async (req, res) => {
    try {
        const { id } = req.params;
        const delivery = await Delivery.getById(id);
        if (!delivery) {
            return res.status(404).json({ error: 'Delivery not found' });
        }
        res.status(200).json(delivery);
    } catch (err) {
        console.error('Error executing query:', err.stack);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const updateDeliveryStatus = async (req, res) => {
    try {
        const id = req.params.id;
        const { status } = req.body;

        const updatedDelivery = await Delivery.updateStatus(id, status);

        if (!updatedDelivery) {
            return res.status(404).json({ error: 'Delivery not found' });
        }

        res.status(200).json(updatedDelivery);
    } catch (err) {
        console.error('Error executing query:', err.stack);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};