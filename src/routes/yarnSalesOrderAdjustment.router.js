import express from 'express';
import { yarnSalesOrderAdjustment } from '../controllers/yarnSalesOrderAdjustment.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Yarn Sales Order Adjustment paths (mounted at /api/v1/yarn-sales-order-adjustment).
router.get('/pending', authenticate, yarnSalesOrderAdjustment);
router.get('/detail/:soCode', authenticate, yarnSalesOrderAdjustment);
router.post('/adjust', authenticate, yarnSalesOrderAdjustment);

export default router;
