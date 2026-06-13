import express from 'express';
import { waste } from '../controllers/waste.controller.js';

const router = express.Router();
// The exact "waste/..." paths your React apiPath calls (mounted at /api/v1/waste).
// Each path is forwarded to the core service by the controller.
router.all('/reports/invoice/customer-wise', waste);
router.all('/reports/invoice/date-wise', waste);
router.all('/reports/production/date-wise', waste);
router.all('/reports/production/item-wise', waste);
router.all('/reports/stock/status', waste);

export default router;
