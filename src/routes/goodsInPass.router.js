import express from 'express';
import { goodsInPass } from '../controllers/goodsInPass.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();

// Goods In Pass paths (mounted at /api/v1/goods-in-pass).
router.get('/options', authenticate, goodsInPass);
router.get('/list', authenticate, goodsInPass);
router.get('/document/:code', authenticate, goodsInPass);
router.post('/store-in', authenticate, goodsInPass);
router.post('/reject', authenticate, goodsInPass);

export default router;
