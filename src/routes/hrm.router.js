import express from 'express';
import { hrm } from '../controllers/hrm.controller.js';

const router = express.Router();
// The exact "hrm/..." paths your React apiPath calls (mounted at /api/v1/hrm).
// Each path is forwarded to the core service by the controller.
router.all('/LeaveEntry-approvals/list', hrm);
router.all('/attn-manual-entry-approvals/list', hrm);
router.all('/compensation-approvals/list', hrm);
router.all('/effect-date-limits', hrm);
router.all('/emp-inc-approvals/list', hrm);
router.all('/employee-approvals/list', hrm);
router.all('/grade-inc-approvals/list', hrm);
router.all('/new-join-approval/list', hrm);
router.all('/new-join-approval/update', hrm);
router.all('/onduty-approvals/list', hrm);
router.all('/overview/attendance-manual_entry/approve', hrm);
router.all('/overview/compensation-work-entry/approve', hrm);
router.all('/overview/employee-approve-overview/list', hrm);
router.all('/overview/employee-wise-increment/approve', hrm);
router.all('/overview/employee/approve', hrm);
router.all('/overview/grad-wise-increment/approve', hrm);
router.all('/overview/leave-entry/approve', hrm);
router.all('/overview/on-duty-entry/approve', hrm);
router.all('/reports/export', hrm);
router.all('/reports/filter-list', hrm);
router.all('/waste/approve', hrm);
router.all('/waste/list-details', hrm);
router.all('/waste/lists', hrm);

export default router;
