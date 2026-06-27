import express from 'express';
import { machineTapeCut } from '../controllers/machineTapeCut.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Machine Tape Cut (frmMachineTapeCut) — mounted at /api/v1/machine-tape-cut.
router.get('/options', authenticate, machineTapeCut);
router.get('/machines', authenticate, machineTapeCut);
router.get('/lists', authenticate, machineTapeCut);
router.get('/list/:code', authenticate, machineTapeCut);
router.post('/create', authenticate, machineTapeCut);
router.put('/update/:code', authenticate, machineTapeCut);
router.delete('/delete/:code', authenticate, machineTapeCut);

export default router;
