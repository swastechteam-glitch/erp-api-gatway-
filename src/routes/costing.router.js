import express from 'express';
import { costing } from '../controllers/costing.controller.js';

const router = express.Router();
// The exact "costing/..." paths your React apiPath calls (mounted at /api/v1/costing).
// Each path is forwarded to the core service by the controller.
router.get('/reports/mill-costing', costing);

export default router;
