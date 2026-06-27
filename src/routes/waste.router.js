import express from 'express';
import { waste } from '../controllers/waste.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// The exact "waste/..." paths your React apiPath calls (mounted at /api/v1/waste).
// Each path is forwarded to the core service by the controller.
router.all('/reports/invoice/customer-wise',authenticate, waste);
router.all('/reports/scrap-invoice/date-wise',authenticate, waste);
router.all('/reports/invoice/date-wise',authenticate, waste);
router.all('/reports/invoice/report',authenticate, waste);
router.all('/reports/invoice/approval',authenticate, waste);
router.all('/reports/production/date-wise',authenticate, waste);
router.all('/reports/production/item-wise',authenticate, waste);
router.all('/reports/production/bale-wise',authenticate, waste);
router.all('/reports/production/bale-no-abstract',authenticate, waste);
router.all('/reports/production/item-abstract',authenticate, waste);
router.all('/reports/stock/status',authenticate, waste);
router.all('/reports/stock/report',authenticate, waste);
router.all('/reports/stock/options',authenticate, waste);
router.all('/reports/stock/current',authenticate, waste);
router.all('/reports/usable-waste-production/date-wise',authenticate, waste);
router.all('/reports/usable-waste-production/options',authenticate, waste);
router.all('/reports/usable-waste-issue/details',authenticate, waste);

export default router;
