import express from 'express';
import { cottonPurchaseOrderCancel } from '../controllers/cottonPurchaseOrderCancel.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Cotton Purchase Order Cancel paths (mounted at /api/v1/cotton-purchase-order-cancel).
router.get('/pending-qty', authenticate, cottonPurchaseOrderCancel);   // pending POs (paginated)
router.put('/cancel/:code', authenticate, cottonPurchaseOrderCancel);  // cancel / adjustment qty

export default router;
