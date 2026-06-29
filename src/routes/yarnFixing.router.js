import express from 'express';
import { yarnFixing } from '../controllers/yarnFixing.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Yarn Production Fixing paths (mounted at /api/v1/yarn-fixing).
router.get('/options', authenticate, yarnFixing);     // line dropdowns
router.get('/employees', authenticate, yarnFixing);   // supervisor/employee by date
router.get('/prev-entry', authenticate, yarnFixing);  // reload a day's saved lines
router.post('/create', authenticate, yarnFixing);     // header + detail rows

export default router;
