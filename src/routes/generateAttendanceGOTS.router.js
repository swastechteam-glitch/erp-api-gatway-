import express from 'express';
import { generateAttendanceGOTS } from '../controllers/generateAttendanceGOTS.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Generate Attendance New paths (mounted at /api/v1/generate-attendance-gots). Forwarded to core.
router.get('/options', authenticate, generateAttendanceGOTS);                 // GET  pay types
router.get('/pay-periods/:payTypeCode', authenticate, generateAttendanceGOTS);// GET  pay periods
router.post('/generate', authenticate, generateAttendanceGOTS);              // POST start generate
router.get('/progress/:runId', authenticate, generateAttendanceGOTS);        // GET  poll progress

export default router;
