import Route from '../models/routeModel.js';

export const getRoutes = async (req, res) => {
    try {
        const routes = await Route.getAll();
        res.status(200).json(routes);
    } catch (error) {
        console.error('Error fetching routes:', error.message);
        res.status(500).json({ error: 'Server error fetching routes'});
    }
};

export const createRoute = async (req, res) => {
    try{
        const { routeNumber, status } = req.body;

        if (!routeNumber) {
            return res.status(400).json({ error: 'Route number is required' });
        }

        const newRoute = await Route.create(routeNumber, status);
        res.status(201).json(newRoute);
    }catch (error) {
        console.error('Error creating route:', error.message);
        res.status(500).json({ error: 'Server error creating route' });
    }
};

export const updateRouteStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        if (!status) {
            return res.status(400).json({ error: 'Status is required' });
        }

        const updatedRoute = await Route.updateStatus(id, status);
        res.status(200).json(updatedRoute);

    } catch (error) {
        console.error('Error updating route status:', error.message);
        res.status(500).json({ error: 'Server error updating route status' });
    }
};

export const deleteRoute = async (req, res) => {
    try{
        const { id } = req.params;
        const deletedRoute = await Route.delete(id);
        res.status(200).json({message: "Route deleted successfully", route: deletedRoute});
    } catch(error){
        console.error('Error deleting route:', error.message);
        res.status(500).json({ error: 'Server error deleting route' });
    }
}

export const getRouteById = async (req, res) => {
    try {
        const { id } = req.params;
        const route = await Route.getById(id);

        if (!route) {
            return res.status(404).json({ error: 'Route not found' });
        }
        res.status(200).json(route);
    } catch (error) {
        console.error('Error fetching route by ID:', error.message);
        res.status(500).json({ error: 'Server error fetching route' });
    }
};