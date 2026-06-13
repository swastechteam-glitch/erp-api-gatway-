import express from 'express';
import { auth } from '../controllers/auth.controller.js';

const router = express.Router();
// The exact "auth/..." paths your React apiPath calls (mounted at /api/v1/auth).
// Each path is forwarded to the core service by the controller.
router.get('/fycode-list', auth);
router.post('/login', auth);
router.post('/token-create', auth);

export default router;
