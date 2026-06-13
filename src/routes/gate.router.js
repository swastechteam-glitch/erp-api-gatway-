import express from 'express';
import { gate } from '../controllers/gate.controller.js';

const router = express.Router();
// The exact "gate/..." paths your React apiPath calls (mounted at /api/v1/gate).
// Each path is forwarded to the core service by the controller.
router.all('/gate-goods-out-approval/list', gate);
router.all('/overview/gate-out/approve', gate);
router.all('/overview/goods-out-approve-overview/list', gate);
router.all('/overview/vehicle-in-out-approve-overview/list', gate);
router.all('/overview/vehicle-in-out/approve', gate);
router.all('/vehicle-in-out-approval/list', gate);

export default router;
