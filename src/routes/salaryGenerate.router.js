import express from 'express';
import { salaryGenerate } from '../controllers/salaryGenerate.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Salary Generate paths (mounted at /api/v1/salary-generate). Forwarded to core.
router.get('/options', authenticate, salaryGenerate);                  // GET  pay types
router.get('/pay-periods/:payTypeCode', authenticate, salaryGenerate); // GET  pay periods
router.post('/generate', authenticate, salaryGenerate);                // POST start generate
router.get('/progress/:runId', authenticate, salaryGenerate);          // GET  poll progress

export default router;
