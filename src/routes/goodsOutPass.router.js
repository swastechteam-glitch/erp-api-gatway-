import express from 'express';
import { goodsOutPass } from '../controllers/goodsOutPass.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();

// Goods Out Pass paths (mounted at /api/v1/goods-out-pass).
router.get('/options', authenticate, goodsOutPass);
router.get('/bind-no', authenticate, goodsOutPass);
router.get('/inout-types', authenticate, goodsOutPass);
router.get('/items', authenticate, goodsOutPass);
router.get('/ref-nos', authenticate, goodsOutPass);
router.get('/ref-details', authenticate, goodsOutPass);
router.post('/create', authenticate, goodsOutPass);
router.get('/pending', authenticate, goodsOutPass);
router.get('/pending/:code', authenticate, goodsOutPass);

export default router;
