import express from 'express';
import { downloadMachine } from '../controllers/downloadMachine.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Download From Machine paths (mounted at /api/v1/download-machine). Forwarded to core.
router.get('/status', authenticate, downloadMachine);              // GET  machine list + reachability
router.post('/download', authenticate, downloadMachine);          // POST start background download
router.get('/progress/:runId', authenticate, downloadMachine);    // GET  poll progress

export default router;
