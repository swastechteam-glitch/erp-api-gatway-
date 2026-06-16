import express from 'express';
import { finance } from '../controllers/finance.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// The exact "finance/..." paths your React apiPath calls (mounted at /api/v1/finance).
// Each path is forwarded to the core service by the controller.
router.all('/adv-req1-approvals/list',authenticate, finance);
router.all('/adv-req2-approvals/list',authenticate, finance);
router.all('/credit-note-approvals/list',authenticate, finance);
router.all('/debit-note-approvals/list',authenticate, finance);
router.all('/overview/adv-payment-approve1-overview/list',authenticate, finance);
router.all('/overview/adv-payment-approve2-overview/list',authenticate, finance);
router.all('/overview/credit-note-details-overview/list',authenticate, finance);
router.all('/overview/credit-note/approve',authenticate, finance);
router.all('/overview/debit-note-details-overview/list',authenticate, finance);
router.all('/overview/debit-note/approve',authenticate, finance);
router.all('/overview/finance-advance-req-stage-one/approve',authenticate, finance);
router.all('/overview/finance-advance-req-stage-two/approve',authenticate, finance);
router.all('/overview/payment-approve-overview/list',authenticate, finance);
router.all('/overview/payment/approve',authenticate, finance);
router.all('/overview/receipt-approvals-overview/list',authenticate, finance);
router.all('/overview/receipt-one/approve',authenticate, finance);
router.all('/overview/receipt-two/approve',authenticate, finance);
router.all('/payment-approvals/list',authenticate, finance);
router.all('/receipt1-approvals/list',authenticate, finance);
router.all('/receipt2-approvals/list',authenticate, finance);

export default router;
