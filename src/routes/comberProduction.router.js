import express from 'express';
import { comberProduction } from '../controllers/comberProduction.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Comber Production paths (mounted at /api/v1/comber-production).
router.get('/options', authenticate, comberProduction);
router.get('/machines', authenticate, comberProduction);
router.get('/next-no', authenticate, comberProduction);
router.get('/exists', authenticate, comberProduction);
router.get('/lists', authenticate, comberProduction);
router.get('/list/:code', authenticate, comberProduction);
router.post('/create', authenticate, comberProduction);
router.put('/update/:code', authenticate, comberProduction);
router.delete('/delete/:code', authenticate, comberProduction);

export default router;
