import express from 'express';
import { mechanical } from '../controllers/mechanical.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// The exact "mechanical/..." paths your React apiPath calls (mounted at /api/v1/mechanical).
// Each path is forwarded to the core service by the controller.
router.all('/reports/break-down/cost',authenticate, mechanical);
router.all('/reports/break-down/date-wise',authenticate, mechanical);
router.all('/reports/break-down/department-wise',authenticate, mechanical);
router.all('/reports/break-down/machine-wise',authenticate, mechanical);
router.all('/reports/cost',authenticate, mechanical);
router.all('/reports/daily-report',authenticate, mechanical);
router.all('/reports/machine-buffing/date-wise',authenticate, mechanical);
router.all('/reports/machine-buffing/detail',authenticate, mechanical);
router.all('/reports/machine-buffing/pending',authenticate, mechanical);
router.all('/reports/machine-tape-cut/date-wise',authenticate, mechanical);
router.all('/reports/machine-tape-cut/department-wise',authenticate, mechanical);
router.all('/reports/machine-tape-cut/item-wise',authenticate, mechanical);
router.all('/reports/machine-tape-cut/machine-wise',authenticate, mechanical);
router.all('/reports/maintenance-life-span',authenticate, mechanical);
router.all('/reports/next-service-consumption/date-wise',authenticate, mechanical);
router.all('/reports/next-service-consumption/department-wise',authenticate, mechanical);
router.all('/reports/next-service-consumption/item-stock',authenticate, mechanical);
router.all('/reports/next-service-consumption/item-wise',authenticate, mechanical);
router.all('/reports/next-service-consumption/last/item-wise',authenticate, mechanical);
router.all('/reports/next-service-consumption/last/machine-wise',authenticate, mechanical);
router.all('/reports/next-service-consumption/machine-wise',authenticate, mechanical);
router.all('/reports/next-service-schedule/date-wise',authenticate, mechanical);
router.all('/reports/next-service-schedule/department-wise',authenticate, mechanical);
router.all('/reports/next-service-schedule/machine-wise',authenticate, mechanical);
router.all('/reports/next-service-schedule/service-wise',authenticate, mechanical);
router.all('/reports/service-schedule/date-wise',authenticate, mechanical);
router.all('/reports/service-schedule/department-wise',authenticate, mechanical);
router.all('/reports/service-schedule/machine-wise',authenticate, mechanical);
router.all('/reports/service-schedule/pendings',authenticate, mechanical);
router.all('/reports/service-schedule/pendings-with-reason',authenticate, mechanical);
router.all('/reports/service-schedule/service-wise',authenticate, mechanical);
router.all('/reports/tonnage',authenticate, mechanical);
router.all('/reports/work-order/date-wise',authenticate, mechanical);
router.all('/reports/work-order/department-wise',authenticate, mechanical);
router.all('/reports/work-order/details/department-wise',authenticate, mechanical);
router.all('/reports/work-order/details/machine-wise',authenticate, mechanical);
router.all('/reports/work-order/details/machine-wise-breakdown',authenticate, mechanical);
router.all('/reports/work-order/details/service-wise',authenticate, mechanical);

export default router;
