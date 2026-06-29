import express from 'express';
import { indentApproval1 } from '../controllers/indentApproval1.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Indent Approval Stage-1 paths (mounted at /api/v1/indent-approval-1).
router.get('/options', authenticate, indentApproval1);
router.get('/pending', authenticate, indentApproval1);
router.get('/indent-lines', authenticate, indentApproval1);
router.post('/approve', authenticate, indentApproval1);

export default router;
