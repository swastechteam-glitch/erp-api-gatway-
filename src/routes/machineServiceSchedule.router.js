import express from 'express';
import { machineServiceSchedule } from '../controllers/machineServiceSchedule.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Machine Service Schedule paths (mounted at /api/v1/machine-service-schedule).
router.get('/branches', authenticate, machineServiceSchedule);
router.get('/departments', authenticate, machineServiceSchedule);
router.get('/service-activities', authenticate, machineServiceSchedule);
router.get('/uoms', authenticate, machineServiceSchedule);
router.get('/items', authenticate, machineServiceSchedule);
router.get('/machines', authenticate, machineServiceSchedule);
router.get('/machine-schedule', authenticate, machineServiceSchedule);
router.get('/activity-items', authenticate, machineServiceSchedule);
router.post('/save', authenticate, machineServiceSchedule);

export default router;
