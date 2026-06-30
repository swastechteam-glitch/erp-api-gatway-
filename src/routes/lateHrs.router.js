import express from 'express';
import { lateHrs } from '../controllers/lateHrs.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Late Hour Entry paths (mounted at /api/v1/late-hrs). Forwarded to core.
router.get('/options', authenticate, lateHrs);                // GET    employees
router.get('/grid', authenticate, lateHrs);                   // GET    day grid
router.post('/save', authenticate, lateHrs);                  // POST   save
router.delete('/delete/:lateHrsCode', authenticate, lateHrs); // DELETE delete

export default router;
