import express from 'express';
import { leftRejoin } from '../controllers/leftRejoin.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Left And Rejoin paths (mounted at /api/v1/left-rejoin). Forwarded to core.
router.get('/options', authenticate, leftRejoin);                          // GET  employees + no
router.get('/employee-detail/:employeeCode', authenticate, leftRejoin);    // GET  employee detail
router.post('/save', authenticate, leftRejoin);                            // POST save

export default router;
