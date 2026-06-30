import express from 'express';
import { processStock } from '../controllers/processStock.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Process Stock Entry paths (mounted at /api/v1/process-stock).
router.get('/options', authenticate, processStock);
router.get('/lists', authenticate, processStock);
router.post('/add', authenticate, processStock);
router.delete('/:code', authenticate, processStock);

export default router;
