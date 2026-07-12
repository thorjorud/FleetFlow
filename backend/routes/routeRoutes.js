import express from "express";
import { getRoutes, getRouteById, createRoute, deleteRoute, updateRouteStatus } from "../controllers/routesController.js";

const router = express.Router();
 
router.get('/', getRoutes);
router.get('/:id', getRouteById);
router.put('/:id', updateRouteStatus);
router.delete('/:id', deleteRoute);
router.post('/', createRoute);



export default router;

