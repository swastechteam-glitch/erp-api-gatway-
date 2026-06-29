import express from 'express';
import { directIssue } from '../controllers/directIssue.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Direct Issue paths (mounted at /api/v1/direct-issue).
router.get('/options', authenticate, directIssue);
router.get('/items', authenticate, directIssue);
router.get('/machines', authenticate, directIssue);
router.post('/create', authenticate, directIssue);

export default router;
