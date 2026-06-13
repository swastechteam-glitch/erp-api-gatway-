import express from 'express';
import { mechanical } from '../controllers/mechanical.controller.js';

const router = express.Router();
// The exact "mechanical/..." paths your React apiPath calls (mounted at /api/v1/mechanical).
// Each path is forwarded to the core service by the controller.
router.all('/reports/break-down/cost', mechanical);
router.all('/reports/break-down/date-wise', mechanical);
router.all('/reports/break-down/department-wise', mechanical);
router.all('/reports/break-down/machine-wise', mechanical);
router.all('/reports/cost', mechanical);
router.all('/reports/daily-report', mechanical);
router.all('/reports/machine-buffing/date-wise', mechanical);
router.all('/reports/machine-buffing/detail', mechanical);
router.all('/reports/machine-buffing/pending', mechanical);
router.all('/reports/machine-tape-cut/date-wise', mechanical);
router.all('/reports/machine-tape-cut/department-wise', mechanical);
router.all('/reports/machine-tape-cut/item-wise', mechanical);
router.all('/reports/machine-tape-cut/machine-wise', mechanical);
router.all('/reports/maintenance-life-span', mechanical);
router.all('/reports/next-service-consumption/date-wise', mechanical);
router.all('/reports/next-service-consumption/department-wise', mechanical);
router.all('/reports/next-service-consumption/item-stock', mechanical);
router.all('/reports/next-service-consumption/item-wise', mechanical);
router.all('/reports/next-service-consumption/last/item-wise', mechanical);
router.all('/reports/next-service-consumption/last/machine-wise', mechanical);
router.all('/reports/next-service-consumption/machine-wise', mechanical);
router.all('/reports/next-service-schedule/date-wise', mechanical);
router.all('/reports/next-service-schedule/department-wise', mechanical);
router.all('/reports/next-service-schedule/machine-wise', mechanical);
router.all('/reports/next-service-schedule/service-wise', mechanical);
router.all('/reports/service-schedule/date-wise', mechanical);
router.all('/reports/service-schedule/department-wise', mechanical);
router.all('/reports/service-schedule/machine-wise', mechanical);
router.all('/reports/service-schedule/pendings', mechanical);
router.all('/reports/service-schedule/pendings-with-reason', mechanical);
router.all('/reports/service-schedule/service-wise', mechanical);
router.all('/reports/tonnage', mechanical);
router.all('/reports/work-order/date-wise', mechanical);
router.all('/reports/work-order/department-wise', mechanical);
router.all('/reports/work-order/details/department-wise', mechanical);
router.all('/reports/work-order/details/machine-wise', mechanical);
router.all('/reports/work-order/details/machine-wise-breakdown', mechanical);
router.all('/reports/work-order/details/service-wise', mechanical);

export default router;
