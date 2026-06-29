import express from 'express';
import { yarnBillConfirmation } from '../controllers/yarnBillConfirmation.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Bill Conformation paths (mounted at /api/v1/yarn-bill-confirmation).
router.get('/pending', authenticate, yarnBillConfirmation);
router.get('/detail/:invoiceCode', authenticate, yarnBillConfirmation);
router.get('/credit', authenticate, yarnBillConfirmation);
router.post('/confirm/:invoiceCode', authenticate, yarnBillConfirmation);

export default router;
