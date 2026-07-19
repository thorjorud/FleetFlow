import express from "express";
import { getDeliveryById, getAllDeliveries, updateDeliveryStatus} from "../controllers/deliveriesController.js";

const router = express.Router();

router.route('/')
    .get(getAllDeliveries);

router.route('/:id')
    .get(getDeliveryById)
    .patch(updateDeliveryStatus);

export default router;