import express from 'express';
import { cottonCount } from '../controllers/cottonCount.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Cotton Count master paths (mounted at /api/v1/cotton-count).
router.get('/lists', authenticate, cottonCount);                          // GET    list
router.get('/list/:cottonCountCode', authenticate, cottonCount);          // GET    one
router.post('/create', authenticate, cottonCount);                        // POST   create
router.put('/update/:cottonCountCode', authenticate, cottonCount);        // PUT    update
router.delete('/delete/:cottonCountCode', authenticate, cottonCount);     // DELETE delete

export default router;
