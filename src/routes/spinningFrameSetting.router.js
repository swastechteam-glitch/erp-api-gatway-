import express from 'express';
import { spinningFrameSetting } from '../controllers/spinningFrameSetting.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Spinning Frame Setting paths (mounted at /api/v1/spinning-frame-setting).
router.get('/options', authenticate, spinningFrameSetting);
router.get('/lists', authenticate, spinningFrameSetting);
router.get('/list/:code', authenticate, spinningFrameSetting);
router.post('/create', authenticate, spinningFrameSetting);
router.put('/update/:code', authenticate, spinningFrameSetting);
router.delete('/delete/:code', authenticate, spinningFrameSetting);

export default router;
