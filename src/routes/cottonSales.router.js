import express from 'express';
import { cottonSales } from '../controllers/cottonSales.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Cotton Sales paths (mounted at /api/v1/cotton-sales).
router.get('/options', authenticate, cottonSales);
router.get('/next-no', authenticate, cottonSales);
router.get('/lot-stock', authenticate, cottonSales);
router.get('/bales-stock/:arrivalCode', authenticate, cottonSales);
router.get('/lists', authenticate, cottonSales);
router.get('/list/:code', authenticate, cottonSales);
router.post('/create', authenticate, cottonSales);
router.put('/update/:code', authenticate, cottonSales);
router.delete('/delete/:code', authenticate, cottonSales);

export default router;
