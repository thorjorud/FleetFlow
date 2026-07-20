import express from "express";
import { getRoutes, getRouteById, createRoute, deleteRoute, updateRouteStatus } from "../controllers/routesController.js";
import { validate } from "../middleware/validate.js";
import { routeCreateSchema, routeUpdateSchema } from "../middleware/schemas.js";


const router = express.Router();

router.route('/')
    .get(getRoutes)
    .post(validate(routeCreateSchema), createRoute);

router.route('/:id')
    .get(getRouteById)
    .put(validate(routeUpdateSchema), updateRouteStatus)
    .delete(deleteRoute);



export default router;

