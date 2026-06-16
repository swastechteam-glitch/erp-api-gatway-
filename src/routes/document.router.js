import express from 'express';
import { document } from '../controllers/document.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";
const router = express.Router();
// The exact "document/..." paths your React apiPath calls (mounted at /api/v1/document).
// Each path is forwarded to the core service by the controller.
router.get('/reports/cotton/bill-passing-print',authenticate, document);
router.get('/reports/cotton/bill-passing-print/details',authenticate, document);
router.get('/reports/cotton/grn-print',authenticate, document);
router.get('/reports/cotton/grn-print/details',authenticate, document);
router.get('/reports/cotton/mixing-requisition-print',authenticate, document);
router.get('/reports/cotton/mixing-requisition-print/details',authenticate, document);
router.get('/reports/cotton/moisture-test-print',authenticate, document);
router.get('/reports/cotton/moisture-test-print/details',authenticate, document);
router.get('/reports/cotton/po-print',authenticate, document);
router.get('/reports/cotton/po-print/details',authenticate, document);
router.get('/reports/cotton/weighment-slip-print',authenticate, document);
router.get('/reports/cotton/weighment-slip-print/details',authenticate, document);
router.get('/reports/store/purchase-order',authenticate, document);
router.get('/reports/store/purchase-order/details',authenticate, document);
router.get('/reports/yarn/sales-invoice',authenticate, document);
router.get('/reports/yarn/sales-invoice/details',authenticate, document);

export default router;
