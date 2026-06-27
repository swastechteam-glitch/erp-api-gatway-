import express from 'express';
import { breakdown } from '../controllers/breakdown.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Electrical / Mechanical Break Down Entry (frmBreakDown) — mounted at /api/v1/breakdown.
router.get('/options', authenticate, breakdown);
router.get('/machines', authenticate, breakdown);
router.get('/job-card-no', authenticate, breakdown);
router.get('/stock', authenticate, breakdown);
router.get('/lists', authenticate, breakdown);
router.get('/list/:sbCode', authenticate, breakdown);
router.post('/create', authenticate, breakdown);
router.put('/update/:sbCode', authenticate, breakdown);
router.delete('/delete/:sbCode', authenticate, breakdown);

export default router;
