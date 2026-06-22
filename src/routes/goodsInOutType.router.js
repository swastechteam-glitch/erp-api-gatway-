import express from 'express';
import { goodsInOutType } from '../controllers/goodsInOutType.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Goods In Out Type master paths (mounted at /api/v1/goods-in-out-type).
router.get('/options', authenticate, goodsInOutType);          // GET    Material Type lookup
router.get('/lists', authenticate, goodsInOutType);            // GET    list
router.get('/list/:code', authenticate, goodsInOutType);       // GET    one
router.post('/create', authenticate, goodsInOutType);          // POST   create
router.put('/update/:code', authenticate, goodsInOutType);     // PUT    update
router.delete('/delete/:code', authenticate, goodsInOutType);  // DELETE delete

export default router;
