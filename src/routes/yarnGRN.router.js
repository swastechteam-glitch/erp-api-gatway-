import express from 'express';
import { yarnGRN } from '../controllers/yarnGRN.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Yarn GRN (Inward) paths (mounted at /api/v1/yarn-grn).
router.get('/options', authenticate, yarnGRN);
router.get('/next-no', authenticate, yarnGRN);
router.get('/bag-no', authenticate, yarnGRN);
router.get('/pending', authenticate, yarnGRN);
router.get('/pending-detail/:code', authenticate, yarnGRN);
router.get('/lists', authenticate, yarnGRN);
router.post('/create', authenticate, yarnGRN);

export default router;
