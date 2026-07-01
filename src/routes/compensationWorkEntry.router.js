import express from 'express';
import { compensationWorkEntry } from '../controllers/compensationWorkEntry.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Compensation Work Entry paths (mounted at /api/v1/compensation-work-entry). Forwarded to core.
router.get('/options', authenticate, compensationWorkEntry);                       // GET    employees + shifts + no
router.get('/list', authenticate, compensationWorkEntry);                          // GET    existing entries grid
router.get('/attendance-check', authenticate, compensationWorkEntry);              // GET    live attendance feedback
router.post('/save', authenticate, compensationWorkEntry);                         // POST   save (add / edit)
router.delete('/:compensationWorkEntryCode', authenticate, compensationWorkEntry); // DELETE remove one entry

export default router;
