import express from 'express';
import { manualEntryReason } from '../controllers/manualEntryReason.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// (Attendance) Manual Entry Reason paths (mounted at /api/v1/manual-entry-reason). Forwarded to core.
router.get('/lists', authenticate, manualEntryReason);             // GET    list
router.get('/list/:code', authenticate, manualEntryReason);        // GET    one
router.post('/create', authenticate, manualEntryReason);           // POST   create
router.put('/update/:code', authenticate, manualEntryReason);      // PUT    update
router.delete('/delete/:code', authenticate, manualEntryReason);   // DELETE delete

export default router;
