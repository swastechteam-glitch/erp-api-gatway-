import express from 'express';
import { cottonWeightApproval } from '../controllers/cottonWeightApproval.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Cotton Weight Approval paths (mounted at /api/v1/cotton-weight-approval).
router.get('/options', authenticate, cottonWeightApproval);
router.get('/pendings', authenticate, cottonWeightApproval);
router.get('/detail/:weighmentCode', authenticate, cottonWeightApproval);
router.post('/approve', authenticate, cottonWeightApproval);

export default router;
