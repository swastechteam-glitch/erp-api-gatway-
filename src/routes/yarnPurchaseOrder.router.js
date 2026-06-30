import express from 'express';
import { yarnPurchaseOrder } from '../controllers/yarnPurchaseOrder.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Yarn Purchase Order paths (mounted at /api/v1/yarn-purchase-order).
router.get('/options', authenticate, yarnPurchaseOrder);
router.get('/tax-types', authenticate, yarnPurchaseOrder);
router.get('/next-no', authenticate, yarnPurchaseOrder);
router.get('/stock', authenticate, yarnPurchaseOrder);
router.get('/lists', authenticate, yarnPurchaseOrder);
router.post('/create', authenticate, yarnPurchaseOrder);
router.put('/update/:code', authenticate, yarnPurchaseOrder);
router.delete('/:code', authenticate, yarnPurchaseOrder);
router.get('/:code', authenticate, yarnPurchaseOrder);

export default router;
