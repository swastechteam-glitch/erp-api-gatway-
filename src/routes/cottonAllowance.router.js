import express from 'express';
import { cottonAllowance } from '../controllers/cottonAllowance.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Cotton Allowance paths (mounted at /api/v1/cotton-allowance).
router.get('/options', authenticate, cottonAllowance);
router.get('/next-no', authenticate, cottonAllowance);
router.get('/lot/:arrivalCode', authenticate, cottonAllowance);
router.get('/lists', authenticate, cottonAllowance);
router.post('/create', authenticate, cottonAllowance);
router.put('/update/:code', authenticate, cottonAllowance);
router.delete('/delete/:code', authenticate, cottonAllowance);

export default router;
