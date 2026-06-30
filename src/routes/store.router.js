import express from 'express';
import { store } from '../controllers/store.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// The exact "store/..." paths your React apiPath calls (mounted at /api/v1/store).
// Each path is forwarded to the core service by the controller.
router.all('/reports/export', authenticate, store);

// Purchase Requisition Report (rptItemRequisitionDetails) — forwarded to core.
router.get('/reports/purchase-requisition/options', authenticate, store);
router.get('/reports/purchase-requisition', authenticate, store);
router.get('/reports/purchase-requisition-pending', authenticate, store);
router.get('/reports/purchase-requisition-pending-req', authenticate, store);

// Purchase Order Report (rptPurchaseOrderDetails) — forwarded to core.
router.get('/reports/purchase-order/options', authenticate, store);
router.get('/reports/purchase-order', authenticate, store);
router.get('/reports/purchase-order-pending', authenticate, store);

// Inward Report (rptPurchaseOrderReceivedDetails) — forwarded to core.
router.get('/reports/inward/options', authenticate, store);
router.get('/reports/inward', authenticate, store);
router.get('/reports/inward-abstract', authenticate, store);

// GRN Item Without Issue Report (rptGRNWithoutIssue) — forwarded to core.
router.get('/reports/grn-without-issue/options', authenticate, store);
router.get('/reports/grn-without-issue', authenticate, store);

// Purchase Return Report (rptPurchaseReturnDetails) — forwarded to core.
router.get('/reports/purchase-return/options', authenticate, store);
router.get('/reports/purchase-return', authenticate, store);

// Issue / Store Issue Report (rptIssueDetails) — forwarded to core.
router.get('/reports/issue/options', authenticate, store);
router.get('/reports/issue', authenticate, store);
router.get('/reports/issue-stock-inward', authenticate, store);
router.get('/reports/issue-stock-consumption', authenticate, store);
router.get('/reports/issue-year-wise', authenticate, store);
router.get('/reports/issue-month-wise', authenticate, store);
router.get('/reports/issue-summary', authenticate, store);

// Stock Ledger Report (rptStockLedger) — forwarded to core.
router.get('/reports/stock-ledger/options', authenticate, store);
router.get('/reports/stock-ledger', authenticate, store);
router.get('/reports/stock-ledger-nonmoving', authenticate, store);
router.get('/reports/stock-ledger-yearly', authenticate, store);

export default router;
