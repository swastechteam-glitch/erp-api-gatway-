import express from 'express';
import { document } from '../controllers/document.controller.js';

const router = express.Router();
// The exact "document/..." paths your React apiPath calls (mounted at /api/v1/document).
// Each path is forwarded to the core service by the controller.
router.get('/reports/cotton/bill-passing-print', document);
router.get('/reports/cotton/bill-passing-print/details', document);
router.get('/reports/cotton/grn-print', document);
router.get('/reports/cotton/grn-print/details', document);
router.get('/reports/cotton/mixing-requisition-print', document);
router.get('/reports/cotton/mixing-requisition-print/details', document);
router.get('/reports/cotton/moisture-test-print', document);
router.get('/reports/cotton/moisture-test-print/details', document);
router.get('/reports/cotton/po-print', document);
router.get('/reports/cotton/po-print/details', document);
router.get('/reports/cotton/weighment-slip-print', document);
router.get('/reports/cotton/weighment-slip-print/details', document);
router.get('/reports/store/purchase-order', document);
router.get('/reports/store/purchase-order/details', document);
router.get('/reports/yarn/sales-invoice', document);
router.get('/reports/yarn/sales-invoice/details', document);

export default router;
