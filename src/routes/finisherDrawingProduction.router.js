import express from 'express';
import { finisherDrawingProduction } from '../controllers/finisherDrawingProduction.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Finisher Drawing Production paths (mounted at /api/v1/finisher-drawing-production).
router.get('/options', authenticate, finisherDrawingProduction);
router.get('/machines', authenticate, finisherDrawingProduction);
router.get('/next-no', authenticate, finisherDrawingProduction);
router.get('/exists', authenticate, finisherDrawingProduction);
router.get('/lists', authenticate, finisherDrawingProduction);
router.get('/list/:code', authenticate, finisherDrawingProduction);
router.post('/create', authenticate, finisherDrawingProduction);
router.put('/update/:code', authenticate, finisherDrawingProduction);
router.delete('/delete/:code', authenticate, finisherDrawingProduction);

export default router;
