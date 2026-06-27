import express from 'express';
import { simplexMachineSetting } from '../controllers/simplexMachineSetting.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Simplex Machine Setting paths (mounted at /api/v1/simplex-machine-setting).
router.get('/options', authenticate, simplexMachineSetting);
router.get('/lists', authenticate, simplexMachineSetting);
router.get('/list/:spxMachineSettingCode', authenticate, simplexMachineSetting);
router.post('/create', authenticate, simplexMachineSetting);
router.put('/update/:spxMachineSettingCode', authenticate, simplexMachineSetting);
router.delete('/delete/:spxMachineSettingCode', authenticate, simplexMachineSetting);

export default router;
