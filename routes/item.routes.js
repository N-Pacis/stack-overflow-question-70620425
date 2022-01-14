import express from 'express'
import { createItem, getItemById, getItems, updateQuantity } from '../controllers/item.controller.js'
const router = express.Router()
import { validateItemRegistration, validateItemUpdate } from '../validators/item.validator.js';

router.get("/items/all",getItems)

router.get("/items/:itemId",getItemById)

router.post("/items/new/create", validateItemRegistration, createItem)

router.put("/items/:itemId/update", validateItemUpdate, updateQuantity)

export default router;