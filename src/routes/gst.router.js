import express from 'express';
import { gst } from '../controllers/gst.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// GST lookup (mounted at /api/v1/gst).
router.get('/:gstin', authenticate, gst);   // GET firm details by GSTIN

export default router;
