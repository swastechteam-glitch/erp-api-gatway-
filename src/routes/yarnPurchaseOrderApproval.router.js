import express from 'express';
import { yarnPurchaseOrderApproval } from '../controllers/yarnPurchaseOrderApproval.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Yarn Purchase Order Approval paths (mounted at /api/v1/yarn-purchase-order-approval).
router.get('/pending', authenticate, yarnPurchaseOrderApproval);
router.get('/detail/:code', authenticate, yarnPurchaseOrderApproval);
router.post('/approve/:code', authenticate, yarnPurchaseOrderApproval);
router.post('/reject/:code', authenticate, yarnPurchaseOrderApproval);

export default router;
