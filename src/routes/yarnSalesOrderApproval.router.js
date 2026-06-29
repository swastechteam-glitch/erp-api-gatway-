import express from 'express';
import { yarnSalesOrderApproval } from '../controllers/yarnSalesOrderApproval.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Yarn Sales Order Approval paths (mounted at /api/v1/yarn-sales-order-approval).
router.get('/pending', authenticate, yarnSalesOrderApproval);
router.get('/detail/:soCode', authenticate, yarnSalesOrderApproval);
router.get('/credit', authenticate, yarnSalesOrderApproval);
router.post('/approve/:soCode', authenticate, yarnSalesOrderApproval);

export default router;
