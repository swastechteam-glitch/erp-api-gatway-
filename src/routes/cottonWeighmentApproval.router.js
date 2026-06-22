import express from 'express';
import { cottonWeighmentApproval } from '../controllers/cottonWeighmentApproval.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Cotton Weighment Approval paths (mounted at /api/v1/cotton-weighment-approval).
router.get('/options', authenticate, cottonWeighmentApproval);
router.get('/pending', authenticate, cottonWeighmentApproval);
router.get('/detail/:code', authenticate, cottonWeighmentApproval);
router.put('/approve/:code', authenticate, cottonWeighmentApproval);

export default router;
