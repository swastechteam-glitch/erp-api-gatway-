import express from 'express';
import { einvoice } from '../controllers/einvoice.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();

// E-Invoice / E-Way-Bill (GST IRN) — forwarded to core (mounted at /api/v1/einvoice).
router.get('/health', authenticate, einvoice);
router.get('/config', authenticate, einvoice);
router.get('/worklist', authenticate, einvoice);
router.post('/generate', authenticate, einvoice);

export default router;
