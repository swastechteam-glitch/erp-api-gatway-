import express from 'express';
import { newJoinerPass } from '../controllers/newJoinerPass.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// New Joiner Pass paths (mounted at /api/v1/new-joiner-pass). Forwarded to core.
router.get('/list', authenticate, newJoinerPass);     // GET  new joiners
router.get('/company', authenticate, newJoinerPass);  // GET  company header
router.get('/photo/:employeeCode', authenticate, newJoinerPass); // GET employee photo

export default router;
