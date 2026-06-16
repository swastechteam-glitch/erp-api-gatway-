import express from 'express';
import { payroll } from '../controllers/payroll.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// The exact "payroll/..." paths your React apiPath calls (mounted at /api/v1/payroll).
// Each path is forwarded to the core service by the controller.
router.all('/reports/attendance/date-wise',authenticate, payroll);
router.all('/reports/attendance/late-in',authenticate, payroll);
router.all('/reports/attendance/manual-entry',authenticate, payroll);
router.all('/reports/attendance/mis-match',authenticate, payroll);
router.all('/reports/attendance/mispunch-vs-manual',authenticate, payroll);
router.all('/reports/costing/abstract',authenticate, payroll);
router.all('/reports/join-left/agent-wise',authenticate, payroll);
router.all('/reports/join-left/department-wise',authenticate, payroll);
router.all('/reports/left/agent-wise',authenticate, payroll);
router.all('/reports/left/department-wise',authenticate, payroll);
router.all('/reports/master/adolescent',authenticate, payroll);
router.all('/reports/master/agent-wise-department-abstract',authenticate, payroll);
router.all('/reports/master/agent-wise-hostel-abstract',authenticate, payroll);
router.all('/reports/master/bank-account-register',authenticate, payroll);
router.all('/reports/master/department-wise-shift-abstract',authenticate, payroll);
router.all('/reports/master/employee-agent-wise',authenticate, payroll);
router.all('/reports/master/proof-register',authenticate, payroll);
router.all('/reports/master/register-department-wise',authenticate, payroll);
router.all('/reports/master/tsc-register',authenticate, payroll);
router.all('/reports/new-joining/agent-wise',authenticate, payroll);
router.all('/reports/new-joining/department-wise',authenticate, payroll);
router.all('/reports/strength/abstract',authenticate, payroll);

export default router;
