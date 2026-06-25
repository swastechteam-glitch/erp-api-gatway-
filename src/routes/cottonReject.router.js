import express from 'express';
import { cottonReject } from '../controllers/cottonReject.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Cotton Reject paths (mounted at /api/v1/cotton-reject).
router.get('/options', authenticate, cottonReject);
router.get('/next-no', authenticate, cottonReject);
router.get('/bales-stock/:arrivalCode', authenticate, cottonReject);
router.get('/lists', authenticate, cottonReject);
router.post('/create', authenticate, cottonReject);
router.delete('/delete/:code', authenticate, cottonReject);

export default router;
