import express from 'express';
import { weighbridge } from '../controllers/weighbridge.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// The exact "weighbridge/..." paths your React apiPath calls (mounted at /api/v1/weighbridge).
// Each path is forwarded to the core service by the controller.
router.all('/reports/weighment/date-wise',authenticate, weighbridge);
router.all('/reports/weighment/item-wise',authenticate, weighbridge);
router.all('/reports/weighment/vehicle-wise',authenticate, weighbridge);

export default router;
