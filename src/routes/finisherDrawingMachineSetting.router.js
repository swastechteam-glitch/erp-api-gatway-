import express from 'express';
import { finisherDrawingMachineSetting } from '../controllers/finisherDrawingMachineSetting.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Finisher Drawing Machine Setting paths (mounted at /api/v1/finisher-drawing-machine-setting).
router.get('/options', authenticate, finisherDrawingMachineSetting);
router.get('/lists', authenticate, finisherDrawingMachineSetting);
router.get('/list/:fdrwMachineSettingCode', authenticate, finisherDrawingMachineSetting);
router.post('/create', authenticate, finisherDrawingMachineSetting);
router.put('/update/:fdrwMachineSettingCode', authenticate, finisherDrawingMachineSetting);
router.delete('/delete/:fdrwMachineSettingCode', authenticate, finisherDrawingMachineSetting);

export default router;
