import express from 'express';
import { cotton } from '../controllers/cotton.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// The exact "cotton/..." paths your React apiPath calls (mounted at /api/v1/cotton).
// Each path is forwarded to the core service by the controller.
router.post('/overview/allowance-generation/approve',authenticate, cotton);
router.post('/overview/bill-passing/approve',authenticate, cotton);
router.post('/overview/issue-lot-test/approve',authenticate, cotton);
router.post('/overview/purchase-order/approve',authenticate, cotton);
router.post('/overview/quality-test/approve',authenticate, cotton);
router.post('/overview/reject-lot/approve',authenticate, cotton);
router.get('/allowance-approvals/list',authenticate, cotton);
router.get('/bill-passing-approvals/list',authenticate, cotton);
router.get('/issue-lot-approvals/list',authenticate, cotton);
router.get('/overview/allowance-generation-overview/list/:id?',authenticate, cotton);
router.get('/overview/bill-passing-overview/list/:id?',authenticate, cotton);
router.get('/overview/issue-lot-overview/list/:id?',authenticate, cotton);
router.get('/overview/purchase-order-overview/list/:id?',authenticate, cotton);
router.get('/overview/quality-test-overview/list/:id?',authenticate, cotton);
router.get('/overview/reject-lot-overview/list/:id?',authenticate, cotton);
router.get('/purchase-order-approvals/list',authenticate, cotton);
router.get('/quality-test-approvals/list',authenticate, cotton);
router.get('/reject-lot-approvals/list',authenticate, cotton);
router.get('/reports/allowance',authenticate, cotton);
router.get('/reports/arrival',authenticate, cotton);
router.get('/reports/export',authenticate, cotton);
router.get('/reports/lot-approval',authenticate, cotton);
router.get('/reports/mixing-issue',authenticate, cotton);
router.get('/reports/po-approval',authenticate, cotton);
router.get('/reports/po-approval-pending',authenticate, cotton);
router.get('/reports/purchase-order',authenticate, cotton);
router.get('/reports/purchase-order-pending',authenticate, cotton);
router.get('/reports/quality-approval-pending',authenticate, cotton);
router.get('/reports/quality-test',authenticate, cotton);
router.get('/reports/reject',authenticate, cotton);
router.get('/reports/lot-wise',authenticate, cotton);
router.get('/reports/sales',authenticate, cotton);
router.get('/reports/form-iv',authenticate, cotton);
router.get('/reports/bill-passing',authenticate, cotton);
router.get('/reports/stock',authenticate, cotton);
router.get('/reports/weighment',authenticate, cotton);
router.get('/supplier-cur-bl-approvals/list',authenticate, cotton);
router.get('/transfer-approvals/list',authenticate, cotton);

export default router;
