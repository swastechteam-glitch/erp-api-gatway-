import express from 'express';
import { yarnSalesOrder } from '../controllers/yarnSalesOrder.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Yarn Sales Order paths (mounted at /api/v1/yarn-sales-order).
router.get('/options', authenticate, yarnSalesOrder);
router.get('/tax-types', authenticate, yarnSalesOrder);
router.get('/next-no', authenticate, yarnSalesOrder);
router.get('/customer-credit', authenticate, yarnSalesOrder);
router.get('/stock', authenticate, yarnSalesOrder);
router.get('/quality-std', authenticate, yarnSalesOrder);
router.get('/lists', authenticate, yarnSalesOrder);
router.post('/create', authenticate, yarnSalesOrder);
router.put('/update/:soCode', authenticate, yarnSalesOrder);
router.delete('/:soCode', authenticate, yarnSalesOrder);
router.get('/:soCode', authenticate, yarnSalesOrder);

export default router;
