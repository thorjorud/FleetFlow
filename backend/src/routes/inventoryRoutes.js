import express from 'express';
import { getInventoryById, getInventory, addInventoryItem, updateInventoryItem, deleteInventoryItem } from '../controllers/inventoryController.js';
import { validate } from '../middleware/validate.js';
import { inventoryCreateSchema, inventoryUpdateSchema } from '../middleware/schemas.js';


const router = express.Router();

router.route('/')
    .get(getInventory)
    .post(validate(inventoryCreateSchema), addInventoryItem);

router.route('/:id')
    .get(getInventoryById)
    .put(validate(inventoryUpdateSchema), updateInventoryItem)
    .delete(deleteInventoryItem);

export default router;