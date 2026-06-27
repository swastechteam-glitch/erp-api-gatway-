import express from 'express';
import { purchaseOrderPrint } from '../controllers/purchaseOrderPrint.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Purchase Order Doc Print paths (mounted at /api/v1/purchase-order-print).
router.get('/companies', authenticate, purchaseOrderPrint);
router.get('/suppliers', authenticate, purchaseOrderPrint);
router.get('/orders', authenticate, purchaseOrderPrint);
router.get('/list', authenticate, purchaseOrderPrint);
router.get('/document', authenticate, purchaseOrderPrint);
router.get('/pdf', authenticate, purchaseOrderPrint);
router.post('/email', authenticate, purchaseOrderPrint);

export default router;
