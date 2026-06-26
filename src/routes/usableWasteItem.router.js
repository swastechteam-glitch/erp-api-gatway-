import express from 'express';
import { usableWasteItem } from '../controllers/usableWasteItem.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Usable Waste Item master paths (mounted at /api/v1/usable-waste-item).
router.get('/options', authenticate, usableWasteItem);                       // GET    dropdown lookups
router.get('/lists', authenticate, usableWasteItem);                         // GET    list
router.get('/list/:usableWasteItemCode', authenticate, usableWasteItem);     // GET    one
router.post('/create', authenticate, usableWasteItem);                       // POST   create
router.put('/update/:usableWasteItemCode', authenticate, usableWasteItem);   // PUT    update
router.delete('/delete/:usableWasteItemCode', authenticate, usableWasteItem);// DELETE delete

export default router;
