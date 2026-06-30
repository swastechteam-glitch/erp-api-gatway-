import express from 'express';
import { otManualEntry } from '../controllers/otManualEntry.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// OT Manual Entry paths (mounted at /api/v1/ot-manual-entry). Forwarded to core.
router.get('/options', authenticate, otManualEntry);                  // GET    lookups
router.get('/grid', authenticate, otManualEntry);                     // GET    day grid
router.get('/employee-lookup', authenticate, otManualEntry);          // GET    employee detail
router.post('/save', authenticate, otManualEntry);                    // POST   save
router.delete('/delete/:manualCode', authenticate, otManualEntry);    // DELETE delete

export default router;
