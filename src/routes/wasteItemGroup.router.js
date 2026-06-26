import express from 'express';
import { wasteItemGroup } from '../controllers/wasteItemGroup.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Waste Item Group master paths (mounted at /api/v1/waste-item-group).
router.get('/lists', authenticate, wasteItemGroup);                            // GET    list
router.get('/list/:wasteItemGroupCode', authenticate, wasteItemGroup);        // GET    one
router.post('/create', authenticate, wasteItemGroup);                         // POST   create
router.put('/update/:wasteItemGroupCode', authenticate, wasteItemGroup);      // PUT    update
router.delete('/delete/:wasteItemGroupCode', authenticate, wasteItemGroup);   // DELETE delete

export default router;
