import express from 'express';
import { attenApproval } from '../controllers/attenApproval.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Attendance & OT Approval — Stage 1 paths (mounted at /api/v1/atten-approval). Forwarded to core.
router.get('/pendings', authenticate, attenApproval);   // GET   pending entries
router.post('/approve', authenticate, attenApproval);   // POST  approve selected

export default router;
