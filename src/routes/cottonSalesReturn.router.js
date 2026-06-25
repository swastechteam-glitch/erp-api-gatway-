import express from 'express';
import { cottonSalesReturn } from '../controllers/cottonSalesReturn.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Cotton Sales Return paths (mounted at /api/v1/cotton-sales-return).
router.get('/options', authenticate, cottonSalesReturn);
router.get('/next-no', authenticate, cottonSalesReturn);
router.get('/sales', authenticate, cottonSalesReturn);
router.get('/sale/:cottonSalesCode', authenticate, cottonSalesReturn);
router.get('/lists', authenticate, cottonSalesReturn);
router.post('/create', authenticate, cottonSalesReturn);
router.delete('/delete/:code', authenticate, cottonSalesReturn);

export default router;
