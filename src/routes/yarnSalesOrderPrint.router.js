import express from 'express';
import { yarnSalesOrderPrint } from '../controllers/yarnSalesOrderPrint.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Yarn Sales Order Print paths (mounted at /api/v1/yarn-sales-order-print).
router.get('/options', authenticate, yarnSalesOrderPrint);
router.get('/lists', authenticate, yarnSalesOrderPrint);
router.get('/report/:soCode', authenticate, yarnSalesOrderPrint);

export default router;
