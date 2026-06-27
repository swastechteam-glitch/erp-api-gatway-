import express from 'express';
import { spinningProduction } from '../controllers/spinningProduction.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Spinning Production paths (mounted at /api/v1/spinning-production).
router.get('/options', authenticate, spinningProduction);
router.get('/machines', authenticate, spinningProduction);
router.get('/next-no', authenticate, spinningProduction);
router.get('/exists', authenticate, spinningProduction);
router.get('/lists', authenticate, spinningProduction);
router.get('/list/:code', authenticate, spinningProduction);
router.post('/create', authenticate, spinningProduction);
router.put('/update/:code', authenticate, spinningProduction);
router.delete('/delete/:code', authenticate, spinningProduction);

export default router;
