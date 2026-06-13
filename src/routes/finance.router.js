import express from 'express';
import { finance } from '../controllers/finance.controller.js';

const router = express.Router();
// The exact "finance/..." paths your React apiPath calls (mounted at /api/v1/finance).
// Each path is forwarded to the core service by the controller.
router.all('/adv-req1-approvals/list', finance);
router.all('/adv-req2-approvals/list', finance);
router.all('/credit-note-approvals/list', finance);
router.all('/debit-note-approvals/list', finance);
router.all('/overview/adv-payment-approve1-overview/list', finance);
router.all('/overview/adv-payment-approve2-overview/list', finance);
router.all('/overview/credit-note-details-overview/list', finance);
router.all('/overview/credit-note/approve', finance);
router.all('/overview/debit-note-details-overview/list', finance);
router.all('/overview/debit-note/approve', finance);
router.all('/overview/finance-advance-req-stage-one/approve', finance);
router.all('/overview/finance-advance-req-stage-two/approve', finance);
router.all('/overview/payment-approve-overview/list', finance);
router.all('/overview/payment/approve', finance);
router.all('/overview/receipt-approvals-overview/list', finance);
router.all('/overview/receipt-one/approve', finance);
router.all('/overview/receipt-two/approve', finance);
router.all('/payment-approvals/list', finance);
router.all('/receipt1-approvals/list', finance);
router.all('/receipt2-approvals/list', finance);

export default router;
