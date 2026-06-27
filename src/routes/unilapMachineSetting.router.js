import express from 'express';
import { unilapMachineSetting } from '../controllers/unilapMachineSetting.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Unilap Machine Setting master paths (mounted at /api/v1/unilap-machine-setting).
router.get('/options', authenticate, unilapMachineSetting);
router.get('/lists', authenticate, unilapMachineSetting);
router.get('/list/:uniMachineSettingCode', authenticate, unilapMachineSetting);
router.post('/create', authenticate, unilapMachineSetting);
router.put('/update/:uniMachineSettingCode', authenticate, unilapMachineSetting);
router.delete('/delete/:uniMachineSettingCode', authenticate, unilapMachineSetting);

export default router;
