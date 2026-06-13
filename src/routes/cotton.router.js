import express from 'express';
import { cotton } from '../controllers/cotton.controller.js';

const router = express.Router();
// The exact "cotton/..." paths your React apiPath calls (mounted at /api/v1/cotton).
// Each path is forwarded to the core service by the controller.
router.post('/overview/allowance-generation/approve', cotton);
router.post('/overview/bill-passing/approve', cotton);
router.post('/overview/issue-lot-test/approve', cotton);
router.post('/overview/purchase-order/approve', cotton);
router.post('/overview/quality-test/approve', cotton);
router.post('/overview/reject-lot/approve', cotton);
router.get('/allowance-approvals/list', cotton);
router.get('/bill-passing-approvals/list', cotton);
router.get('/issue-lot-approvals/list', cotton);
router.get('/overview/allowance-generation-overview/list', cotton);
router.get('/overview/bill-passing-overview/list', cotton);
router.get('/overview/issue-lot-overview/list', cotton);
router.get('/overview/purchase-order-overview/list', cotton);
router.get('/overview/quality-test-overview/list', cotton);
router.get('/overview/reject-lot-overview/list', cotton);
router.get('/purchase-order-approvals/list', cotton);
router.get('/quality-test-approvals/list', cotton);
router.get('/reject-lot-approvals/list', cotton);
router.get('/reports/arrival', cotton);
router.get('/reports/export', cotton);
router.get('/reports/mixing-issue', cotton);
router.get('/reports/purchase-order', cotton);
router.get('/reports/purchase-order-pending', cotton);
router.get('/reports/stock', cotton);
router.get('/reports/weighment', cotton);
router.get('/supplier-cur-bl-approvals/list', cotton);
router.get('/transfer-approvals/list', cotton);

export default router;
