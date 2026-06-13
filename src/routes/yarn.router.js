import express from 'express';
import { yarn } from '../controllers/yarn.controller.js';

const router = express.Router();
// The exact "yarn/..." paths your React apiPath calls (mounted at /api/v1/yarn).
// Each path is forwarded to the core service by the controller.
router.all('/customer-approvals/list', yarn);
router.all('/despatch-approvals/list', yarn);
router.all('/invoice-approvals/list', yarn);
router.all('/overview/invoice-overview/list', yarn);
router.all('/overview/sales-order-overview/list', yarn);
router.all('/overview/sales-return-overview/list', yarn);
router.all('/overview/yarn-invoice/approve', yarn);
router.all('/overview/yarn-sales-order/approve', yarn);
router.all('/overview/yarn-sales-return/approve', yarn);
router.all('/reports/export', yarn);
router.all('/sales-order-approvals/list', yarn);
router.all('/sales-return-approvals/list', yarn);

export default router;
