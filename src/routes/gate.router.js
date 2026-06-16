import express from 'express';
import { gate } from '../controllers/gate.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// The exact "gate/..." paths your React apiPath calls (mounted at /api/v1/gate).
// Each path is forwarded to the core service by the controller.
router.all('/gate-goods-out-approval/list',authenticate, gate);
router.all('/overview/gate-out/approve',authenticate, gate);
router.all('/overview/goods-out-approve-overview/list',authenticate, gate);
router.all('/overview/vehicle-in-out-approve-overview/list',authenticate, gate);
router.all('/overview/vehicle-in-out/approve',authenticate, gate);
router.all('/vehicle-in-out-approval/list',authenticate, gate);

export default router;
