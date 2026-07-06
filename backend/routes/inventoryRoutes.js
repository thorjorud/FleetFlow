import express from 'express';
import { getInventory, addInventoryItem, updateInventoryItem, deleteInventoryItem } from '../controllers/inventoryController.js';

const router = express.Router();

router.route('/')
    .get(getInventory)
    .post(addInventoryItem);

router.route('/:id')
    .put(updateInventoryItem)
    .delete(deleteInventoryItem);

export default router;