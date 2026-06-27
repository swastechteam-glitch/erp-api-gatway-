import express from 'express';
import { autoconerCountSetting } from '../controllers/autoconerCountSetting.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Autoconer Count Setting paths (mounted at /api/v1/autoconer-count-setting).
router.get('/options', authenticate, autoconerCountSetting);
router.get('/lists', authenticate, autoconerCountSetting);
router.get('/list/:code', authenticate, autoconerCountSetting);
router.post('/create', authenticate, autoconerCountSetting);
router.put('/update/:code', authenticate, autoconerCountSetting);
router.delete('/delete/:code', authenticate, autoconerCountSetting);

export default router;
