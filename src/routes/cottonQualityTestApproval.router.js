import express from 'express';
import { cottonQualityTestApproval } from '../controllers/cottonQualityTestApproval.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Cotton Quality Test Approval paths (mounted at /api/v1/cotton-quality-test-approval).
router.get('/pendings', authenticate, cottonQualityTestApproval);       // pending tests (paginated)
router.get('/details/:code', authenticate, cottonQualityTestApproval);  // parameter grid
router.put('/approve/:code', authenticate, cottonQualityTestApproval);  // approve
router.put('/reject/:code', authenticate, cottonQualityTestApproval);   // reject

export default router;
