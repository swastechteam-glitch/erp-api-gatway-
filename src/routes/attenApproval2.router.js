import express from 'express';
import { attenApproval2 } from '../controllers/attenApproval2.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Attendance & OT Approval — Stage 2 paths (mounted at /api/v1/atten-approval2). Forwarded to core.
router.get('/pendings', authenticate, attenApproval2);   // GET   pending entries
router.post('/approve', authenticate, attenApproval2);   // POST  approve selected

export default router;
