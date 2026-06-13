import express from 'express';
import { allotment } from '../controllers/allotment.controller.js';

const router = express.Router();
// The exact "allotment/..." paths your React apiPath calls (mounted at /api/v1/allotment).
// Each path is forwarded to the core service by the controller.
router.get('/department-shift-data/list', allotment);
router.get('/employee-allotment-details/list', allotment);
router.get('/unique-employee-allotments/list', allotment);

export default router;
