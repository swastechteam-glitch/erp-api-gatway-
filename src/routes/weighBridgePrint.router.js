import express from 'express';
import { weighbridge } from '../controllers/weighbridge.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Weighment Slip Print paths (mounted at /api/v1/weigh-bridge-print). Forwarded
// to core by the shared "weighbridge" forwarder — it passes req.originalUrl
// through as-is and re-emits the core content-type, so both the JSON list and
// the binary PDF slip travel back unchanged.
router.get('/options', authenticate, weighbridge);        // GET  companies
router.get('/list', authenticate, weighbridge);           // GET  grid rows
router.get('/slip', authenticate, weighbridge);           // GET  per-weighment PDF slip
router.post('/mark-printed', authenticate, weighbridge);  // POST Printed = 1

export default router;
