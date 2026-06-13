import express from 'express';
import { company } from '../controllers/company.controller.js';

const router = express.Router();
// The exact "company/..." paths your React apiPath calls (mounted at /api/v1/company).
// Each path is forwarded to the core service by the controller.
router.get('/', company);

export default router;
