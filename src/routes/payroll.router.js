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
router.all('/reports/attendance/details',authenticate, payroll);
router.all('/reports/attendance/details-gots',authenticate, payroll);
router.all('/reports/movement-details',authenticate, payroll);
router.all('/reports/attendance-overall',authenticate, payroll);
router.all('/reports/leave-details',authenticate, payroll);
router.all('/reports/designation-change',authenticate, payroll);
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
router.all('/reports/master/options',authenticate, payroll);
router.all('/reports/master/batch-wise',authenticate, payroll);
router.all('/reports/master/hostel-type-wise',authenticate, payroll);
router.all('/reports/master/room-list',authenticate, payroll);
router.all('/reports/master/pf-esi-register',authenticate, payroll);
router.all('/reports/new-joining/agent-wise',authenticate, payroll);
router.all('/reports/new-joining/department-wise',authenticate, payroll);
router.all('/reports/strength/abstract',authenticate, payroll);
router.all('/reports/time-card',authenticate, payroll);
// Muster Report (rptMuster) — report + its filter-rail options. Both forwarded to core.
router.all('/reports/muster',authenticate, payroll);
router.all('/reports/muster/options',authenticate, payroll);
// Muster Report ALL (rptMusterAll) — report + options. Both forwarded to core.
router.all('/reports/muster-all',authenticate, payroll);
router.all('/reports/muster-all/options',authenticate, payroll);
// Form 25 (rptForm25) — statutory Muster Roll register + options. Forwarded to core.
router.all('/reports/form25',authenticate, payroll);
router.all('/reports/form25/options',authenticate, payroll);
// Monthly Salary Details (rptMonthlySalaryDetails) — report + options. Forwarded to core.
router.all('/reports/monthly-salary',authenticate, payroll);
router.all('/reports/monthly-salary/options',authenticate, payroll);

export default router;
