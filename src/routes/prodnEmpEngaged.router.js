import express from 'express';
import { prodnEmpEngaged } from '../controllers/prodnEmpEngaged.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Production Employee Engaged paths (mounted at /api/v1/prodn-emp-engaged).
router.get('/options', authenticate, prodnEmpEngaged);
router.get('/per-load', authenticate, prodnEmpEngaged);
router.get('/lists', authenticate, prodnEmpEngaged);
router.get('/list/:code', authenticate, prodnEmpEngaged);
router.post('/create', authenticate, prodnEmpEngaged);
router.put('/update/:code', authenticate, prodnEmpEngaged);
router.delete('/delete/:code', authenticate, prodnEmpEngaged);

export default router;
