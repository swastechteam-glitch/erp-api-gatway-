import express from 'express';
import { production } from '../controllers/production.controller.js';

const router = express.Router();
// The exact "production/..." paths your React apiPath calls (mounted at /api/v1/production).
// Each path is forwarded to the core service by the controller.
router.all('/reports/carding/machine-wise', production);
router.all('/reports/carding/stoppage', production);
router.all('/reports/carding/summary', production);
router.all('/reports/comber/employee-performance', production);
router.all('/reports/comber/machine-wise', production);
router.all('/reports/comber/shift-wise', production);
router.all('/reports/comber/stoppage', production);
router.all('/reports/comber/summary', production);
router.all('/reports/drawing/machine-wise', production);
router.all('/reports/drawing/stoppage', production);
router.all('/reports/drawing/summary', production);
router.all('/reports/finisher-drawing/employee-performance', production);
router.all('/reports/finisher-drawing/machine-wise', production);
router.all('/reports/finisher-drawing/shift-wise', production);
router.all('/reports/finisher-drawing/stoppage', production);
router.all('/reports/finisher-drawing/summary', production);
router.all('/reports/overall/employee-performance', production);
router.all('/reports/overall/production', production);
router.all('/reports/overall/spg-ac-packing', production);
router.all('/reports/overall/stoppage', production);
router.all('/reports/overall/summary', production);
router.all('/reports/overall/supervisor', production);
router.all('/reports/overall/ukg', production);
router.all('/reports/overall/waste', production);
router.all('/reports/simplex/employee-performance', production);
router.all('/reports/simplex/machine-wise', production);
router.all('/reports/simplex/shift-wise', production);
router.all('/reports/simplex/stoppage', production);
router.all('/reports/simplex/summary', production);
router.all('/reports/spinning/count-wise', production);
router.all('/reports/spinning/daily-end-break', production);
router.all('/reports/spinning/employee-performance', production);
router.all('/reports/spinning/machine-wise', production);
router.all('/reports/spinning/shift-wise', production);
router.all('/reports/spinning/stoppage', production);
router.all('/reports/spinning/summary', production);
router.all('/reports/unilap/machine-wise', production);
router.all('/reports/unilap/stoppage', production);
router.all('/reports/unilap/summary', production);

export default router;
