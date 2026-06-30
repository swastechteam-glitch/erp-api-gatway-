import express from 'express';
import { attenManualEntryEmpWise } from '../controllers/attenManualEntryEmpWise.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Attendance Manual Entry — Employee Wise paths (mounted at /api/v1/atten-manual-entry-empwise). Forwarded to core.
router.get('/options', authenticate, attenManualEntryEmpWise);                  // GET    lookups
router.get('/pay-periods/:payTypeCode', authenticate, attenManualEntryEmpWise); // GET    pay periods
router.get('/employee-details', authenticate, attenManualEntryEmpWise);         // GET    employee detail
router.get('/grid', authenticate, attenManualEntryEmpWise);                     // GET    merged grid
router.post('/save', authenticate, attenManualEntryEmpWise);                    // POST   save
router.delete('/delete/:manualCode', authenticate, attenManualEntryEmpWise);    // DELETE delete + regen

export default router;
