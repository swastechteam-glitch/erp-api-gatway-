import express from 'express';
import { cottonWeighment } from '../controllers/cottonWeighment.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Cotton Weighment paths (mounted at /api/v1/cotton-weighment).
router.get('/options', authenticate, cottonWeighment);
router.get('/mill-lots', authenticate, cottonWeighment);
router.get('/weigh-bridges', authenticate, cottonWeighment);
router.get('/next-no', authenticate, cottonWeighment);
router.get('/lists', authenticate, cottonWeighment);
router.get('/list/:code', authenticate, cottonWeighment);
router.post('/create', authenticate, cottonWeighment);
router.put('/update/:code', authenticate, cottonWeighment);
router.delete('/delete/:code', authenticate, cottonWeighment);

export default router;
