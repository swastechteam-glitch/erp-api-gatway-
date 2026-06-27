import express from 'express';
import { comberMachineSetting } from '../controllers/comberMachineSetting.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Comber Machine Setting master paths (mounted at /api/v1/comber-machine-setting).
router.get('/options', authenticate, comberMachineSetting);
router.get('/lists', authenticate, comberMachineSetting);
router.get('/list/:cbrMachineSettingCode', authenticate, comberMachineSetting);
router.post('/create', authenticate, comberMachineSetting);
router.put('/update/:cbrMachineSettingCode', authenticate, comberMachineSetting);
router.delete('/delete/:cbrMachineSettingCode', authenticate, comberMachineSetting);

export default router;
