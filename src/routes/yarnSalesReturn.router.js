import express from 'express';
import { yarnSalesReturn } from '../controllers/yarnSalesReturn.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Yarn Sales Return paths (mounted at /api/v1/yarn-sales-return).
router.get('/options', authenticate, yarnSalesReturn);
router.get('/next-no', authenticate, yarnSalesReturn);
router.get('/bag-no', authenticate, yarnSalesReturn);
router.get('/lists', authenticate, yarnSalesReturn);
router.get('/list/:code', authenticate, yarnSalesReturn);
router.post('/create', authenticate, yarnSalesReturn);
router.put('/update/:code', authenticate, yarnSalesReturn);
router.delete('/delete/:code', authenticate, yarnSalesReturn);

export default router;
