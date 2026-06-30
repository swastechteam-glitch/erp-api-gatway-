import express from 'express';
import { yarnInvoiceCancel } from '../controllers/yarnInvoiceCancel.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Invoice Cancel paths (mounted at /api/v1/yarn-invoice-cancel).
router.get('/lists', authenticate, yarnInvoiceCancel);
router.get('/report/:invoiceCode', authenticate, yarnInvoiceCancel);
router.post('/cancel/:invoiceCode', authenticate, yarnInvoiceCancel);

export default router;
