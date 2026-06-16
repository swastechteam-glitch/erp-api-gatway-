import express from 'express';
import { yarn } from '../controllers/yarn.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// The exact "yarn/..." paths your React apiPath calls (mounted at /api/v1/yarn).
// Each path is forwarded to the core service by the controller.
router.all('/customer-approvals/list',authenticate, yarn);
router.all('/despatch-approvals/list',authenticate, yarn);
router.all('/invoice-approvals/list',authenticate, yarn);
router.all('/overview/invoice-overview/list',authenticate, yarn);
router.all('/overview/sales-order-overview/list',authenticate, yarn);
router.all('/overview/sales-return-overview/list',authenticate, yarn);
router.all('/overview/yarn-invoice/approve',authenticate, yarn);
router.all('/overview/yarn-sales-order/approve',authenticate, yarn);
router.all('/overview/yarn-sales-return/approve',authenticate, yarn);
router.all('/reports/export',authenticate, yarn);
router.all('/sales-order-approvals/list',authenticate, yarn);
router.all('/sales-return-approvals/list',authenticate, yarn);

export default router;
