import express from 'express';
import { notification } from '../controllers/notification.controller.js';

const router = express.Router();
// The exact "notification/..." paths your React apiPath calls (mounted at /api/v1/notification).
// Each path is forwarded to the core service by the controller.
router.all('/bull-notification/save', notification);
router.all('/count', notification);
router.all('/token-save', notification);
router.all('/token/delete', notification);
router.all('/token/list', notification);
router.all('/update', notification);

export default router;
