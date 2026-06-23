import express from 'express';
import { purchaseOrder } from '../controllers/purchaseOrder.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Purchase Order paths (mounted at /api/v1/purchase-order).
router.get('/options', authenticate, purchaseOrder);
router.get('/next-no', authenticate, purchaseOrder);
router.get('/pending', authenticate, purchaseOrder);
router.get('/lists', authenticate, purchaseOrder);
router.get('/list/:code', authenticate, purchaseOrder);
router.post('/create', authenticate, purchaseOrder);
router.put('/update/:code', authenticate, purchaseOrder);
router.delete('/delete/:code', authenticate, purchaseOrder);

export default router;
