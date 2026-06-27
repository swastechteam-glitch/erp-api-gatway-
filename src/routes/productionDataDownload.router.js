import express from 'express';
import { productionDataDownload } from '../controllers/productionDataDownload.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Production Download From Machine paths (mounted at /api/v1/production-data-download).
router.get('/options', authenticate, productionDataDownload);
router.post('/check', authenticate, productionDataDownload);
router.post('/download', authenticate, productionDataDownload);

export default router;
