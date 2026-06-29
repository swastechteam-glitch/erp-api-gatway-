import express from 'express';
import { yarnDespatchPacking } from '../controllers/yarnDespatchPacking.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Yarn Despatch Packing paths (mounted at /api/v1/yarn-despatch-packing).
router.get('/options', authenticate, yarnDespatchPacking);
router.get('/pending', authenticate, yarnDespatchPacking);
router.get('/recommended', authenticate, yarnDespatchPacking);
router.get('/auto', authenticate, yarnDespatchPacking);
router.get('/scan', authenticate, yarnDespatchPacking);
router.post('/create', authenticate, yarnDespatchPacking);
router.get('/lines/:invoiceCode', authenticate, yarnDespatchPacking);

export default router;
