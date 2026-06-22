import express from 'express';
import { cottonLotApproval } from '../controllers/cottonLotApproval.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Cotton Lot Issue Approval paths (mounted at /api/v1/cotton-lot-approval).
router.get('/options', authenticate, cottonLotApproval);
router.get('/next-no', authenticate, cottonLotApproval);
router.get('/pending', authenticate, cottonLotApproval);
router.get('/net-weight/:arrivalCode', authenticate, cottonLotApproval);
router.get('/lists', authenticate, cottonLotApproval);
router.get('/list/:code', authenticate, cottonLotApproval);
router.post('/approve', authenticate, cottonLotApproval);
router.post('/reject', authenticate, cottonLotApproval);
router.put('/update/:code', authenticate, cottonLotApproval);
router.delete('/delete/:code', authenticate, cottonLotApproval);

export default router;
