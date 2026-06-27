import express from 'express';
import { simplexProduction } from '../controllers/simplexProduction.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Simplex Production paths (mounted at /api/v1/simplex-production).
router.get('/options', authenticate, simplexProduction);
router.get('/machines', authenticate, simplexProduction);
router.get('/next-no', authenticate, simplexProduction);
router.get('/exists', authenticate, simplexProduction);
router.get('/lists', authenticate, simplexProduction);
router.get('/list/:code', authenticate, simplexProduction);
router.post('/create', authenticate, simplexProduction);
router.put('/update/:code', authenticate, simplexProduction);
router.delete('/delete/:code', authenticate, simplexProduction);

export default router;
