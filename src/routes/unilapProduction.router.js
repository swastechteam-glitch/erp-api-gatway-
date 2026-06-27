import express from 'express';
import { unilapProduction } from '../controllers/unilapProduction.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Uni Lap Production paths (mounted at /api/v1/unilap-production).
router.get('/options', authenticate, unilapProduction);
router.get('/machines', authenticate, unilapProduction);
router.get('/next-no', authenticate, unilapProduction);
router.get('/exists', authenticate, unilapProduction);
router.get('/lists', authenticate, unilapProduction);
router.get('/list/:code', authenticate, unilapProduction);
router.post('/create', authenticate, unilapProduction);
router.put('/update/:code', authenticate, unilapProduction);
router.delete('/delete/:code', authenticate, unilapProduction);

export default router;
