import express from 'express';
import { yarnInvoiceFull } from '../controllers/yarnInvoiceFull.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Yarn Invoice (Full) paths (mounted at /api/v1/yarn-invoice-full).
router.get('/options', authenticate, yarnInvoiceFull);
router.get('/pending-so', authenticate, yarnInvoiceFull);
router.get('/credit', authenticate, yarnInvoiceFull);
router.get('/lot-stock', authenticate, yarnInvoiceFull);
router.get('/lot-bags', authenticate, yarnInvoiceFull);
router.get('/next-no', authenticate, yarnInvoiceFull);
router.get('/lists', authenticate, yarnInvoiceFull);
router.post('/create', authenticate, yarnInvoiceFull);
router.delete('/:invoiceCode', authenticate, yarnInvoiceFull);

export default router;
