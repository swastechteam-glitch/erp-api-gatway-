import express from 'express';
import { empEngaged } from '../controllers/empEngaged.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Electrical / Mechanical Engagement (frmMaintenanceEmpEngaged) — mounted at /api/v1/emp-engaged.
router.get('/options', authenticate, empEngaged);
router.get('/lists', authenticate, empEngaged);
router.get('/list/:code', authenticate, empEngaged);
router.post('/create', authenticate, empEngaged);
router.put('/update/:code', authenticate, empEngaged);
router.delete('/delete/:code', authenticate, empEngaged);

export default router;
