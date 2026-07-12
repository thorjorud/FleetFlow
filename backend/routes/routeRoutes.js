import express from "express";
import { getRoutes, getRouteById, createRoute, deleteRoute, updateRouteStatus } from "../controllers/routesController.js";

const router = express.Router();

router.route('/')
    .get(getRoutes)
    .post(createRoute);

router.route('/:id')
    .get(getRouteById)
    .put(updateRouteStatus)
    .delete(deleteRoute);



export default router;

