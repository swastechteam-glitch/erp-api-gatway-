import express from 'express';
import { cottonPurchaseOrderAmendment } from '../controllers/cottonPurchaseOrderAmendment.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Cotton Purchase Order Amendment paths (mounted at /api/v1/cotton-purchase-order-amendment).
router.get('/cpo-numbers', authenticate, cottonPurchaseOrderAmendment);   // PO number dropdown
router.get('/pending-qty', authenticate, cottonPurchaseOrderAmendment);   // pending-qty help grid
router.put('/amend/:code', authenticate, cottonPurchaseOrderAmendment);   // amend qty

export default router;
