import express from 'express';
import { itemRequisitionAdjustment } from '../controllers/itemRequisitionAdjustment.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Item Requisition Adjustment paths (mounted at /api/v1/item-requisition-adjustment).
router.get('/list', authenticate, itemRequisitionAdjustment);
router.post('/adjust', authenticate, itemRequisitionAdjustment);

export default router;
