import express from 'express';
import { yarnMasterReports } from '../controllers/yarnMasterReports.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Yarn Master Reports paths (mounted at /api/v1/yarn-master-reports).
router.get('/types', authenticate, yarnMasterReports);
router.get('/report', authenticate, yarnMasterReports);

export default router;
