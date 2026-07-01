import express from 'express';
import { attenManualEntry } from '../controllers/attenManualEntry.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Attendance Manual Entry — Shift Wise paths (mounted at /api/v1/atten-manual-entry). Forwarded to core.
router.get('/options', authenticate, attenManualEntry);                  // GET    lookups
router.get('/shifts', authenticate, attenManualEntry);                   // GET    shifts
router.get('/employees/:payTypeCode', authenticate, attenManualEntry);   // GET    employees
router.get('/grid', authenticate, attenManualEntry);                     // GET    day grid
router.get('/employee-lookup', authenticate, attenManualEntry);          // GET    employee detail
router.post('/save', authenticate, attenManualEntry);                    // POST   save
router.delete('/delete/:manualCode', authenticate, attenManualEntry);    // DELETE delete

export default router;
