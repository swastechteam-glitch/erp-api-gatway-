import express from 'express';
import { yarnDuplicateBillPrint } from '../controllers/yarnDuplicateBillPrint.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Duplicate Bill Print paths (mounted at /api/v1/yarn-duplicate-bill-print).
router.get('/options', authenticate, yarnDuplicateBillPrint);
router.get('/lists', authenticate, yarnDuplicateBillPrint);
router.get('/report/:invoiceCode', authenticate, yarnDuplicateBillPrint);

export default router;
