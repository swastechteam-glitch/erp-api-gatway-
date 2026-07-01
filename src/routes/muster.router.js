import express from 'express';
import { muster } from '../controllers/muster.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Muster Generate paths (mounted at /api/v1/muster). Forwarded to core.
router.get('/options', authenticate, muster);                 // GET  pay types
router.get('/pay-periods/:payTypeCode', authenticate, muster);// GET  pay periods
router.post('/generate', authenticate, muster);              // POST start generate
router.get('/progress/:runId', authenticate, muster);        // GET  poll progress

export default router;
