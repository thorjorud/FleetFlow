import express from "express";
import { getDeliveryById, getAllDeliveries, updateDeliveryStatus} from "../controllers/deliveriesController.js";
import { validate } from "../middleware/validate.js";
import { deliveryUpdateSchema } from "../middleware/schemas.js";


const router = express.Router();

router.route('/')
    .get(getAllDeliveries);

router.route('/:id')
    .get(getDeliveryById)
    .patch(validate(deliveryUpdateSchema), updateDeliveryStatus);

export default router;