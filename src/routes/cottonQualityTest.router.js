import express from 'express';
import { cottonQualityTest } from '../controllers/cottonQualityTest.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Cotton Quality Test paths (mounted at /api/v1/cotton-quality-test).
router.get('/options', authenticate, cottonQualityTest);
router.get('/next-no', authenticate, cottonQualityTest);
router.get('/load/:arrivalCode', authenticate, cottonQualityTest);
router.get('/lists', authenticate, cottonQualityTest);
router.get('/list/:code', authenticate, cottonQualityTest);
router.post('/create', authenticate, cottonQualityTest);
router.put('/update/:code', authenticate, cottonQualityTest);
router.delete('/delete/:code', authenticate, cottonQualityTest);

export default router;
