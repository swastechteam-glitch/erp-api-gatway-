import express from 'express';
import { powerFailure } from '../controllers/powerFailure.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// EB Power Failure (frmEB_PowerFailure) — mounted at /api/v1/power-failure.
router.get('/options', authenticate, powerFailure);
router.get('/lists', authenticate, powerFailure);
router.get('/list/:code', authenticate, powerFailure);
router.post('/create', authenticate, powerFailure);
router.put('/update/:code', authenticate, powerFailure);
router.delete('/delete/:code', authenticate, powerFailure);

export default router;
