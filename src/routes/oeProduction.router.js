import express from 'express';
import { oeProduction } from '../controllers/oeProduction.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// OE Production paths (mounted at /api/v1/oe-production).
router.get('/options', authenticate, oeProduction);
router.get('/machines', authenticate, oeProduction);
router.get('/next-no', authenticate, oeProduction);
router.get('/exists', authenticate, oeProduction);
router.get('/lists', authenticate, oeProduction);
router.get('/list/:code', authenticate, oeProduction);
router.post('/create', authenticate, oeProduction);
router.put('/update/:code', authenticate, oeProduction);
router.delete('/delete/:code', authenticate, oeProduction);

export default router;
