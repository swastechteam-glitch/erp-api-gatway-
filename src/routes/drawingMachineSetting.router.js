import express from 'express';
import { drawingMachineSetting } from '../controllers/drawingMachineSetting.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Drawing Machine Setting master paths (mounted at /api/v1/drawing-machine-setting).
router.get('/options', authenticate, drawingMachineSetting);
router.get('/lists', authenticate, drawingMachineSetting);
router.get('/list/:drwMachineSettingCode', authenticate, drawingMachineSetting);
router.post('/create', authenticate, drawingMachineSetting);
router.put('/update/:drwMachineSettingCode', authenticate, drawingMachineSetting);
router.delete('/delete/:drwMachineSettingCode', authenticate, drawingMachineSetting);

export default router;
