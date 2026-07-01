import express from 'express';
import { holdSalary } from '../controllers/holdSalary.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Salary Hold paths (mounted at /api/v1/hold-salary). Forwarded to core.
router.get('/options', authenticate, holdSalary);   // GET  pay periods + employees
router.get('/list', authenticate, holdSalary);       // GET  existing hold/release rows
router.post('/save', authenticate, holdSalary);      // POST upsert rows

export default router;
