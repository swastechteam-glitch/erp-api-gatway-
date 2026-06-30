import express from 'express';
import { yarnGRNPrint } from '../controllers/yarnGRNPrint.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Yarn GRN Print paths (mounted at /api/v1/yarn-grn-print).
router.get('/lists', authenticate, yarnGRNPrint);
router.get('/report/:code', authenticate, yarnGRNPrint);

export default router;
