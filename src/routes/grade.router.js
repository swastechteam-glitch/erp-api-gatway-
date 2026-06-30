import express from 'express';
import { grade } from '../controllers/grade.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Grade — Payroll Master (mounted at /api/v1/grade).
router.get('/options', authenticate, grade);
router.get('/lists', authenticate, grade);
router.get('/record/:code', authenticate, grade);
router.post('/create', authenticate, grade);
router.put('/update/:code', authenticate, grade);
router.delete('/delete/:code', authenticate, grade);

export default router;
