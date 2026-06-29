import express from 'express';
import { yarnInvoiceDelete } from '../controllers/yarnInvoiceDelete.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Invoice Delete paths (mounted at /api/v1/yarn-invoice-delete).
router.get('/lists', authenticate, yarnInvoiceDelete);
router.delete('/:invoiceCode', authenticate, yarnInvoiceDelete);

export default router;
