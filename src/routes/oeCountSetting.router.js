import express from 'express';
import { oeCountSetting } from '../controllers/oeCountSetting.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// OE Count Setting paths (mounted at /api/v1/oe-count-setting).
router.get('/options', authenticate, oeCountSetting);
router.get('/lists', authenticate, oeCountSetting);
router.get('/list/:code', authenticate, oeCountSetting);
router.post('/create', authenticate, oeCountSetting);
router.put('/update/:code', authenticate, oeCountSetting);
router.delete('/delete/:code', authenticate, oeCountSetting);

export default router;
