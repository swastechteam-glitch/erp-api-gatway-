import express from 'express';
import { autoconerMachineSetting } from '../controllers/autoconerMachineSetting.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Autoconer Machine Setting paths (mounted at /api/v1/autoconer-machine-setting).
router.get('/options', authenticate, autoconerMachineSetting);
router.get('/machines', authenticate, autoconerMachineSetting);
router.get('/lists', authenticate, autoconerMachineSetting);
router.get('/list/:code', authenticate, autoconerMachineSetting);
router.post('/create', authenticate, autoconerMachineSetting);
router.put('/update/:code', authenticate, autoconerMachineSetting);
router.delete('/delete/:code', authenticate, autoconerMachineSetting);

export default router;
