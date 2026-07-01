import express from 'express';
import { onDutyEntry } from '../controllers/onDutyEntry.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// On Duty Entry paths (mounted at /api/v1/on-duty-entry). Forwarded to core.
router.get('/options', authenticate, onDutyEntry);              // GET    employees + next no
router.get('/list', authenticate, onDutyEntry);                 // GET    existing entries grid
router.post('/save', authenticate, onDutyEntry);                // POST   save (add / edit)
router.delete('/:onDutyEntryCode', authenticate, onDutyEntry);  // DELETE remove one entry

export default router;
