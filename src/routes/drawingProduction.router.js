import express from 'express';
import { drawingProduction } from '../controllers/drawingProduction.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Drawing Production paths (mounted at /api/v1/drawing-production).
router.get('/options', authenticate, drawingProduction);
router.get('/machines', authenticate, drawingProduction);
router.get('/next-no', authenticate, drawingProduction);
router.get('/exists', authenticate, drawingProduction);
router.get('/lists', authenticate, drawingProduction);
router.get('/list/:code', authenticate, drawingProduction);
router.post('/create', authenticate, drawingProduction);
router.put('/update/:code', authenticate, drawingProduction);
router.delete('/delete/:code', authenticate, drawingProduction);

export default router;
