import express from 'express';
import { spinningStopReason } from '../controllers/spinningStopReason.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Spinning Stoppage Reason Entry paths (mounted at /api/v1/spinning-stop-reason).
router.get('/lists', authenticate, spinningStopReason);
router.get('/list/:code', authenticate, spinningStopReason);
router.post('/create', authenticate, spinningStopReason);
router.put('/update/:code', authenticate, spinningStopReason);
router.delete('/delete/:code', authenticate, spinningStopReason);

export default router;
