import express from 'express';
import { purchaseReturn } from '../controllers/purchaseReturn.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Purchase Return paths (mounted at /api/v1/purchase-return).
router.get('/next-no', authenticate, purchaseReturn);
router.get('/suppliers', authenticate, purchaseReturn);
router.get('/grns', authenticate, purchaseReturn);
router.get('/items', authenticate, purchaseReturn);
router.get('/item-stock', authenticate, purchaseReturn);
router.post('/create', authenticate, purchaseReturn);

export default router;
