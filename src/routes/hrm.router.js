import express from 'express';
import { hrm } from '../controllers/hrm.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// The exact "hrm/..." paths your React apiPath calls (mounted at /api/v1/hrm).
// Each path is forwarded to the core service by the controller.
router.all('/LeaveEntry-approvals/list',authenticate, hrm);
router.all('/attn-manual-entry-approvals/list',authenticate, hrm);
router.all('/compensation-approvals/list',authenticate, hrm);
router.all('/effect-date-limits',authenticate, hrm);
router.all('/emp-inc-approvals/list',authenticate, hrm);
router.all('/employee-approvals/list',authenticate, hrm);
router.all('/grade-inc-approvals/list',authenticate, hrm);
router.all('/new-join-approval/list',authenticate, hrm);
router.all('/new-join-approval/update',authenticate, hrm);
router.all('/onduty-approvals/list',authenticate, hrm);
router.all('/overview/attendance-manual_entry/approve',authenticate, hrm);
router.all('/overview/compensation-work-entry/approve',authenticate, hrm);
router.all('/overview/employee-approve-overview/list/:id?',authenticate, hrm);
router.all('/overview/employee-wise-increment/approve',authenticate, hrm);
router.all('/overview/employee/approve',authenticate, hrm);
router.all('/overview/grad-wise-increment/approve',authenticate, hrm);
router.all('/overview/leave-entry/approve',authenticate, hrm);
router.all('/overview/on-duty-entry/approve',authenticate, hrm);
router.all('/reports/export',authenticate, hrm);
router.all('/reports/filter-list',authenticate, hrm);
router.all('/waste/approve',authenticate, hrm);
router.all('/waste/list-details',authenticate, hrm);
router.all('/waste/lists',authenticate, hrm);

export default router;
