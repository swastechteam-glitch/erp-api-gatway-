import express from 'express';
import { yarnDespatchAdvice } from '../controllers/yarnDespatchAdvice.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Yarn Despatch Advice paths (mounted at /api/v1/yarn-despatch-advice).
router.get('/lists', authenticate, yarnDespatchAdvice);
router.get('/options', authenticate, yarnDespatchAdvice);
router.get('/report/:invoiceCode', authenticate, yarnDespatchAdvice);
router.get('/list/:code', authenticate, yarnDespatchAdvice);
router.post('/create', authenticate, yarnDespatchAdvice);
router.put('/update/:code', authenticate, yarnDespatchAdvice);
router.delete('/delete/:code', authenticate, yarnDespatchAdvice);

export default router;
