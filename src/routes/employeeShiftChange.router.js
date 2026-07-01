import express from 'express';
import { employeeShiftChange } from '../controllers/employeeShiftChange.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Employee Shift Group Change paths (mounted at /api/v1/employee-shift-change). Forwarded to core.
router.get('/options', authenticate, employeeShiftChange);                  // GET  all lookups
router.get('/shifts/:shiftGroupCode', authenticate, employeeShiftChange);   // GET  shifts for a group
router.get('/history/:employeeCode', authenticate, employeeShiftChange);    // GET  employee history
router.post('/save', authenticate, employeeShiftChange);                    // POST save change

export default router;
