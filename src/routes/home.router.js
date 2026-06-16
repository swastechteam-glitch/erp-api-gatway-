import express from 'express';
import { home } from '../controllers/home.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// The exact "home/..." paths your React apiPath calls (mounted at /api/v1/home).
// Each path is forwarded to the core service by the controller.
router.all('/dashboard',authenticate, home);
router.all('/dashboard/cotton/grn',authenticate, home);
router.all('/dashboard/cotton/grn/details',authenticate, home);
router.all('/dashboard/cotton/issue',authenticate, home);
router.all('/dashboard/cotton/issue/details',authenticate, home);
router.all('/dashboard/cotton/purchase',authenticate, home);
router.all('/dashboard/cotton/purchase-order/details',authenticate, home);
router.all('/dashboard/cotton/stock',authenticate, home);
router.all('/dashboard/electrical/pendings',authenticate, home);
router.all('/dashboard/electrical/pendings/details',authenticate, home);
router.all('/dashboard/electrical/scheduled',authenticate, home);
router.all('/dashboard/electrical/scheduled/details',authenticate, home);
router.all('/dashboard/graph-view',authenticate, home);
router.all('/dashboard/last-sync',authenticate, home);
router.all('/dashboard/mechanical/pendings',authenticate, home);
router.all('/dashboard/mechanical/pendings/details',authenticate, home);
router.all('/dashboard/mechanical/scheduled',authenticate, home);
router.all('/dashboard/mechanical/scheduled/details',authenticate, home);
router.all('/dashboard/over-all-costing',authenticate, home);
router.all('/dashboard/payroll/ot-salary',authenticate, home);
router.all('/dashboard/payroll/salary',authenticate, home);
router.all('/dashboard/payroll/strength',authenticate, home);
router.all('/dashboard/payroll/strength/details',authenticate, home);
router.all('/dashboard/pre-costing/calculations',authenticate, home);
router.all('/dashboard/pre-costing/count',authenticate, home);
router.all('/dashboard/store/issue',authenticate, home);
router.all('/dashboard/store/issue/details',authenticate, home);
router.all('/dashboard/store/purchase',authenticate, home);
router.all('/dashboard/store/purchase/details',authenticate, home);
router.all('/dashboard/store/stock',authenticate, home);
router.all('/dashboard/waste/production',authenticate, home);
router.all('/dashboard/waste/sales',authenticate, home);
router.all('/dashboard/waste/sales/details',authenticate, home);
router.all('/dashboard/waste/stock',authenticate, home);
router.all('/dashboard/yarn/production',authenticate, home);
router.all('/dashboard/yarn/sales',authenticate, home);
router.all('/dashboard/yarn/sales-order',authenticate, home);
router.all('/dashboard/yarn/sales-order/details',authenticate, home);
router.all('/dashboard/yarn/sales/details',authenticate, home);
router.all('/dashboard/yarn/stock',authenticate, home);

export default router;
