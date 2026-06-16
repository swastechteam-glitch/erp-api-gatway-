import express from 'express';
import { waste } from '../controllers/waste.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// The exact "waste/..." paths your React apiPath calls (mounted at /api/v1/waste).
// Each path is forwarded to the core service by the controller.
router.all('/reports/invoice/customer-wise',authenticate, waste);
router.all('/reports/invoice/date-wise',authenticate, waste);
router.all('/reports/production/date-wise',authenticate, waste);
router.all('/reports/production/item-wise',authenticate, waste);
router.all('/reports/stock/status',authenticate, waste);

export default router;
