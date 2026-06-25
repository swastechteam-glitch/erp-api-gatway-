import express from 'express';
import { cottonGodownTransfer } from '../controllers/cottonGodownTransfer.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Cotton Godown Transfer paths (mounted at /api/v1/cotton-godown-transfer).
router.get('/options', authenticate, cottonGodownTransfer);
router.get('/lists', authenticate, cottonGodownTransfer);
router.get('/list/:code', authenticate, cottonGodownTransfer);
router.post('/create', authenticate, cottonGodownTransfer);
router.put('/update/:code', authenticate, cottonGodownTransfer);
router.delete('/delete/:code', authenticate, cottonGodownTransfer);

export default router;
