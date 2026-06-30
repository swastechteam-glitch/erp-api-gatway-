import express from 'express';
import { yarnSalesReturnApproval } from '../controllers/yarnSalesReturnApproval.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Yarn Sales Return Approval paths (mounted at /api/v1/yarn-sales-return-approval).
router.get('/pending', authenticate, yarnSalesReturnApproval);
router.get('/detail/:code', authenticate, yarnSalesReturnApproval);
router.post('/approve/:code', authenticate, yarnSalesReturnApproval);
router.post('/reject/:code', authenticate, yarnSalesReturnApproval);

export default router;
