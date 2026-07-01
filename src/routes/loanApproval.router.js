import express from 'express';
import { loanApproval } from '../controllers/loanApproval.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Loan Advance Approval paths (mounted at /api/v1/loan-approval). Forwarded to core.
router.get('/pendings', authenticate, loanApproval);          // GET  pending loans
router.get('/detail/:loanCode', authenticate, loanApproval);  // GET  schedule + prev pending
router.post('/approve', authenticate, loanApproval);          // POST approve one loan

export default router;
