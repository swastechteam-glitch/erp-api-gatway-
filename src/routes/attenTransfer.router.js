import express from 'express';
import { attenTransfer } from '../controllers/attenTransfer.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Attendance Transfer paths (mounted at /api/v1/atten-transfer). Forwarded to core.
router.get('/options', authenticate, attenTransfer);   // GET   from/to employee lists
router.post('/transfer', authenticate, attenTransfer); // POST  transfer

export default router;
