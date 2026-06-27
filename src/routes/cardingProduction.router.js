import express from 'express';
import { cardingProduction } from '../controllers/cardingProduction.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Carding Production paths (mounted at /api/v1/carding-production).
router.get('/options', authenticate, cardingProduction);
router.get('/machines', authenticate, cardingProduction);
router.get('/next-no', authenticate, cardingProduction);
router.get('/exists', authenticate, cardingProduction);
router.get('/lists', authenticate, cardingProduction);
router.get('/list/:code', authenticate, cardingProduction);
router.post('/create', authenticate, cardingProduction);
router.put('/update/:code', authenticate, cardingProduction);
router.delete('/delete/:code', authenticate, cardingProduction);

export default router;
