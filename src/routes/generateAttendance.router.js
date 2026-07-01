import express from 'express';
import { generateAttendance } from '../controllers/generateAttendance.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Generate Attendance paths (mounted at /api/v1/generate-attendance). Forwarded to core.
router.get('/options', authenticate, generateAttendance);                 // GET  pay types
router.get('/pay-periods/:payTypeCode', authenticate, generateAttendance);// GET  pay periods
router.post('/generate', authenticate, generateAttendance);              // POST start generate
router.get('/progress/:runId', authenticate, generateAttendance);        // GET  poll progress

export default router;
