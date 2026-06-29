import express from 'express';
import { indentApproval2 } from '../controllers/indentApproval2.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Indent Approval Stage-2 paths (mounted at /api/v1/indent-approval-2).
router.get('/options', authenticate, indentApproval2);
router.get('/pending', authenticate, indentApproval2);
router.get('/indent-lines', authenticate, indentApproval2);
router.post('/approve', authenticate, indentApproval2);

export default router;
