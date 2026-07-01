import express from 'express';
import { yarnPurchaseOrderPrint } from '../controllers/yarnPurchaseOrderPrint.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Yarn Purchase Order Print paths (mounted at /api/v1/yarn-purchase-order-print).
router.get('/lists', authenticate, yarnPurchaseOrderPrint);
router.get('/report/:code', authenticate, yarnPurchaseOrderPrint);

export default router;
