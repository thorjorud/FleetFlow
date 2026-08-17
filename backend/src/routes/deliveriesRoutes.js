import express from "express";
import { getDeliveryById, getAllDeliveries, updateDeliveryStatus} from "../controllers/deliveriesController.js";
import { validate } from "../middleware/validate.js";
import { deliveryUpdateSchema, deliveryStatusSchema } from "../middleware/schemas.js";


const router = express.Router();

router.route('/')
    .get(getAllDeliveries);

router.route('/:id')
    .get(getDeliveryById)
    .patch(validate(deliveryStatusSchema), updateDeliveryStatus);

export default router;