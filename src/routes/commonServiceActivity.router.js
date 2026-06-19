import express from 'express';
import { commonServiceActivity } from '../controllers/commonServiceActivity.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Common Service Activity paths (mounted at /api/v1/common-service-activity).
router.get('/departments', authenticate, commonServiceActivity);          // dept dropdown
router.get('/service-activities', authenticate, commonServiceActivity);   // left grid
router.get('/main-machines', authenticate, commonServiceActivity);        // main-machine dropdown
router.get('/machine-grid', authenticate, commonServiceActivity);         // master + machine rows
router.post('/save', authenticate, commonServiceActivity);                // common update

export default router;
