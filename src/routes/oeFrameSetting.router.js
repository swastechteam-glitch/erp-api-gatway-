import express from 'express';
import { oeFrameSetting } from '../controllers/oeFrameSetting.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// OE Frame Setting paths (mounted at /api/v1/oe-frame-setting).
router.get('/options', authenticate, oeFrameSetting);
router.get('/lists', authenticate, oeFrameSetting);
router.get('/list/:code', authenticate, oeFrameSetting);
router.post('/create', authenticate, oeFrameSetting);
router.put('/update/:code', authenticate, oeFrameSetting);
router.delete('/delete/:code', authenticate, oeFrameSetting);

export default router;
