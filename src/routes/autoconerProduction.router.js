import express from 'express';
import { autoconerProduction } from '../controllers/autoconerProduction.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Autoconer Production paths (mounted at /api/v1/autoconer-production).
router.get('/options', authenticate, autoconerProduction);
router.get('/machines', authenticate, autoconerProduction);
router.get('/next-no', authenticate, autoconerProduction);
router.get('/exists', authenticate, autoconerProduction);
router.get('/lists', authenticate, autoconerProduction);
router.get('/list/:code', authenticate, autoconerProduction);
router.post('/create', authenticate, autoconerProduction);
router.put('/update/:code', authenticate, autoconerProduction);
router.delete('/delete/:code', authenticate, autoconerProduction);

export default router;
