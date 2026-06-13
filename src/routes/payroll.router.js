import express from 'express';
import { payroll } from '../controllers/payroll.controller.js';

const router = express.Router();
// The exact "payroll/..." paths your React apiPath calls (mounted at /api/v1/payroll).
// Each path is forwarded to the core service by the controller.
router.all('/reports/attendance/date-wise', payroll);
router.all('/reports/attendance/late-in', payroll);
router.all('/reports/attendance/manual-entry', payroll);
router.all('/reports/attendance/mis-match', payroll);
router.all('/reports/attendance/mispunch-vs-manual', payroll);
router.all('/reports/costing/abstract', payroll);
router.all('/reports/join-left/agent-wise', payroll);
router.all('/reports/join-left/department-wise', payroll);
router.all('/reports/left/agent-wise', payroll);
router.all('/reports/left/department-wise', payroll);
router.all('/reports/master/adolescent', payroll);
router.all('/reports/master/agent-wise-department-abstract', payroll);
router.all('/reports/master/agent-wise-hostel-abstract', payroll);
router.all('/reports/master/bank-account-register', payroll);
router.all('/reports/master/department-wise-shift-abstract', payroll);
router.all('/reports/master/employee-agent-wise', payroll);
router.all('/reports/master/proof-register', payroll);
router.all('/reports/master/register-department-wise', payroll);
router.all('/reports/master/tsc-register', payroll);
router.all('/reports/new-joining/agent-wise', payroll);
router.all('/reports/new-joining/department-wise', payroll);
router.all('/reports/strength/abstract', payroll);

export default router;
