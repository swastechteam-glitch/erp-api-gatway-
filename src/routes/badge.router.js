import express from 'express';
import { badge } from '../controllers/badge.controller.js';

const router = express.Router();
// The exact "badge/..." paths your React apiPath calls (mounted at /api/v1/badge).
// Each path is forwarded to the core service by the controller.
router.get('/count', badge);
router.get('/refresh', badge);

export default router;
