import express from 'express';
import { wasteItem } from '../controllers/wasteItem.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Waste Item master paths (mounted at /api/v1/waste-item).
router.get('/options', authenticate, wasteItem);                    // GET    dropdown lookups
router.get('/lists', authenticate, wasteItem);                      // GET    list
router.get('/list/:wasteItemCode', authenticate, wasteItem);        // GET    one
router.post('/create', authenticate, wasteItem);                    // POST   create
router.put('/update/:wasteItemCode', authenticate, wasteItem);      // PUT    update
router.delete('/delete/:wasteItemCode', authenticate, wasteItem);   // DELETE delete

export default router;
