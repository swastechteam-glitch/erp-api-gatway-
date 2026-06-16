import express from 'express';
import { notification } from '../controllers/notification.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// The exact "notification/..." paths your React apiPath calls (mounted at /api/v1/notification).
// Each path is forwarded to the core service by the controller.
router.all('/bull-notification/save',authenticate, notification);
router.all('/count',authenticate, notification);
router.all('/token-save',authenticate, notification);
router.all('/token/delete',authenticate, notification);
router.all('/token/list',authenticate, notification);
router.all('/update',authenticate, notification);

export default router;
