import express from 'express';
import { weighbridge } from '../controllers/weighbridge.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Weigh Bridge Entry paths (mounted at /api/v1/weigh-bridge). Forwarded to core
// by the shared "weighbridge" forwarder (req.originalUrl passed through as-is).
router.get('/options', authenticate, weighbridge);          // GET    vehicles + sections + no
router.get('/empty-load', authenticate, weighbridge);       // GET    open weighments grid
router.post('/save', authenticate, weighbridge);            // POST   save (add / edit)
router.delete('/:weighCode', authenticate, weighbridge);    // DELETE remove one weighment

export default router;
