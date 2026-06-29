import express from 'express';
import { purchaseRequisitionApproval } from '../controllers/purchaseRequisitionApproval.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Purchase Requisition Approval paths (mounted at /api/v1/purchase-requisition-approval).
router.get('/options', authenticate, purchaseRequisitionApproval);
router.get('/pending', authenticate, purchaseRequisitionApproval);
router.get('/document/:code', authenticate, purchaseRequisitionApproval);
router.post('/approve', authenticate, purchaseRequisitionApproval);
router.post('/reject', authenticate, purchaseRequisitionApproval);

export default router;
