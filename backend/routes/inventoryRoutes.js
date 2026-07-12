import express from 'express';
import { getInventoryById, getInventory, addInventoryItem, updateInventoryItem, deleteInventoryItem } from '../controllers/inventoryController.js';

const router = express.Router();

router.route('/')
    .get(getInventory)
    .post(addInventoryItem);

router.route('/:id')
    .get(getInventoryById)
    .put(updateInventoryItem)
    .delete(deleteInventoryItem);

export default router;