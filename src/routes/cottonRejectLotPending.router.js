import express from 'express';
import { cottonRejectLotPending } from '../controllers/cottonRejectLotPending.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Cotton Reject Lot Pending Approval paths (mounted at /api/v1/cotton-reject-lot-pending).
router.get('/options', authenticate, cottonRejectLotPending);
router.get('/pendings', authenticate, cottonRejectLotPending);
router.get('/details/:code', authenticate, cottonRejectLotPending);
router.get('/lists', authenticate, cottonRejectLotPending);
router.put('/approve/:code', authenticate, cottonRejectLotPending);
router.put('/reject/:code', authenticate, cottonRejectLotPending);
router.delete('/delete/:approvalCode', authenticate, cottonRejectLotPending);

export default router;
