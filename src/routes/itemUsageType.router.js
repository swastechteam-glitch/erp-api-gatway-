import express from 'express';
import { itemUsageType } from '../controllers/itemUsageType.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Item Usage Type master paths (mounted at /api/v1/item-usage-type).
router.get('/lists', authenticate, itemUsageType);                       // GET    list
router.get('/list/:itemUsageTypeCode', authenticate, itemUsageType);     // GET    one
router.post('/create', authenticate, itemUsageType);                     // POST   create
router.put('/update/:itemUsageTypeCode', authenticate, itemUsageType);   // PUT    update
router.delete('/delete/:itemUsageTypeCode', authenticate, itemUsageType);// DELETE delete

export default router;
