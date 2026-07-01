import express from 'express';
import { payrollTransactionOverall } from '../controllers/payrollTransactionOverall.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Earning And Deduction paths (mounted at /api/v1/payroll-transaction-overall). Forwarded to core.
router.get('/options', authenticate, payrollTransactionOverall);      // GET  pay types + periods + emp groups
router.get('/pay-periods', authenticate, payrollTransactionOverall);  // GET  pay periods for a pay type
router.get('/grid', authenticate, payrollTransactionOverall);         // GET  pay-head columns + employee rows
router.post('/save', authenticate, payrollTransactionOverall);        // POST delete + AddEdit per cell

export default router;
