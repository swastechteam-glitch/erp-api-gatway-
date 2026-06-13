import express from 'express';
import { home } from '../controllers/home.controller.js';

const router = express.Router();
// The exact "home/..." paths your React apiPath calls (mounted at /api/v1/home).
// Each path is forwarded to the core service by the controller.
router.all('/dashboard', home);
router.all('/dashboard/cotton/grn', home);
router.all('/dashboard/cotton/grn/details', home);
router.all('/dashboard/cotton/issue', home);
router.all('/dashboard/cotton/issue/details', home);
router.all('/dashboard/cotton/purchase', home);
router.all('/dashboard/cotton/purchase-order/details', home);
router.all('/dashboard/cotton/stock', home);
router.all('/dashboard/electrical/pendings', home);
router.all('/dashboard/electrical/pendings/details', home);
router.all('/dashboard/electrical/scheduled', home);
router.all('/dashboard/electrical/scheduled/details', home);
router.all('/dashboard/graph-view', home);
router.all('/dashboard/last-sync', home);
router.all('/dashboard/mechanical/pendings', home);
router.all('/dashboard/mechanical/pendings/details', home);
router.all('/dashboard/mechanical/scheduled', home);
router.all('/dashboard/mechanical/scheduled/details', home);
router.all('/dashboard/over-all-costing', home);
router.all('/dashboard/payroll/ot-salary', home);
router.all('/dashboard/payroll/salary', home);
router.all('/dashboard/payroll/strength', home);
router.all('/dashboard/payroll/strength/details', home);
router.all('/dashboard/pre-costing/calculations', home);
router.all('/dashboard/pre-costing/count', home);
router.all('/dashboard/store/issue', home);
router.all('/dashboard/store/issue/details', home);
router.all('/dashboard/store/purchase', home);
router.all('/dashboard/store/purchase/details', home);
router.all('/dashboard/store/stock', home);
router.all('/dashboard/waste/production', home);
router.all('/dashboard/waste/sales', home);
router.all('/dashboard/waste/sales/details', home);
router.all('/dashboard/waste/stock', home);
router.all('/dashboard/yarn/production', home);
router.all('/dashboard/yarn/sales', home);
router.all('/dashboard/yarn/sales-order', home);
router.all('/dashboard/yarn/sales-order/details', home);
router.all('/dashboard/yarn/sales/details', home);
router.all('/dashboard/yarn/stock', home);

export default router;
