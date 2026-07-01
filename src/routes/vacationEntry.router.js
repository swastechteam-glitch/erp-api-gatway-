import express from 'express';
import { vacationEntry } from '../controllers/vacationEntry.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Vacation Entry paths (mounted at /api/v1/vacation-entry). Forwarded to core.
router.get('/options', authenticate, vacationEntry);                       // GET  employees + no
router.get('/employee-detail/:employeeCode', authenticate, vacationEntry); // GET  employee detail
router.post('/save', authenticate, vacationEntry);                         // POST save

export default router;
