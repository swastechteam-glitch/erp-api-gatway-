import express from 'express';
import { electricalSchedule } from '../controllers/electricalSchedule.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Electrical / Mechanical Schedule Entry (frmSchedule) — mounted at /api/v1/electrical-schedule.
router.get('/options', authenticate, electricalSchedule);
router.get('/machines', authenticate, electricalSchedule);
router.get('/job-card-no', authenticate, electricalSchedule);
router.get('/pendings', authenticate, electricalSchedule);
router.get('/activity-items', authenticate, electricalSchedule);
router.get('/stock', authenticate, electricalSchedule);
router.get('/lists', authenticate, electricalSchedule);
router.get('/list/:sbCode', authenticate, electricalSchedule);
router.post('/create', authenticate, electricalSchedule);
router.put('/update/:sbCode', authenticate, electricalSchedule);
router.delete('/delete/:sbCode', authenticate, electricalSchedule);

export default router;
