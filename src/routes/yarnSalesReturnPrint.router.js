import express from 'express';
import { yarnSalesReturnPrint } from '../controllers/yarnSalesReturnPrint.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Yarn Sales Return Print paths (mounted at /api/v1/yarn-sales-return-print).
router.get('/lists', authenticate, yarnSalesReturnPrint);
router.get('/report/:code', authenticate, yarnSalesReturnPrint);

export default router;
