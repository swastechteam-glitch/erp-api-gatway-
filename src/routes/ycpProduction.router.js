import express from 'express';
import { ycpProduction } from '../controllers/ycpProduction.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// YCP Production paths (mounted at /api/v1/ycp-production).
router.get('/options', authenticate, ycpProduction);
router.get('/next-no', authenticate, ycpProduction);
router.get('/lists', authenticate, ycpProduction);
router.get('/list/:code', authenticate, ycpProduction);
router.post('/create', authenticate, ycpProduction);
router.put('/update/:code', authenticate, ycpProduction);
router.delete('/delete/:code', authenticate, ycpProduction);

export default router;
