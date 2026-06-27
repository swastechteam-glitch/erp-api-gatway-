import express from 'express';
import { spinningCountSetting } from '../controllers/spinningCountSetting.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Spinning Count Setting paths (mounted at /api/v1/spinning-count-setting).
router.get('/options', authenticate, spinningCountSetting);
router.get('/lists', authenticate, spinningCountSetting);
router.get('/list/:code', authenticate, spinningCountSetting);
router.post('/create', authenticate, spinningCountSetting);
router.put('/update/:code', authenticate, spinningCountSetting);
router.delete('/delete/:code', authenticate, spinningCountSetting);

export default router;
