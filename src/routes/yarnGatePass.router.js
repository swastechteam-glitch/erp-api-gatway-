import express from 'express';
import { yarnGatePass } from '../controllers/yarnGatePass.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Yarn Gate Pass paths (mounted at /api/v1/yarn-gate-pass).
router.get('/lists', authenticate, yarnGatePass);
router.get('/report/:gatePassNo', authenticate, yarnGatePass);

export default router;
