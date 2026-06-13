import express from 'express';
import { store } from '../controllers/store.controller.js';

const router = express.Router();
// The exact "store/..." paths your React apiPath calls (mounted at /api/v1/store).
// Each path is forwarded to the core service by the controller.
router.all('/reports/export', store);

export default router;
