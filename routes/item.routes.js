import express from 'express'
import { createItem, getItems, updateQuantity } from '../controllers/item.controller.js'
const router = express.Router()
import { validateItemRegistration, validateItemUpdate } from '../validators/item.validator.js';

router.get("/items/all",getItems)

router.post("/items/create", validateItemRegistration, createItem)

router.post("/items/:itemId/update", validateItemUpdate, updateQuantity)

export default router;