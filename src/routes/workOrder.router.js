import express from 'express';
import { workOrder } from '../controllers/workOrder.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Electrical / Mechanical Work Order Complete (frmWorkOrder) — mounted at /api/v1/work-order.
router.get('/options', authenticate, workOrder);
router.get('/machines', authenticate, workOrder);
router.get('/activities', authenticate, workOrder);
router.get('/bind-no', authenticate, workOrder);
router.get('/pendings', authenticate, workOrder);
router.get('/pending/:sbCode', authenticate, workOrder);
router.get('/lists', authenticate, workOrder);
router.get('/list/:workOrderCode', authenticate, workOrder);
router.post('/create', authenticate, workOrder);
router.post('/create-bulk', authenticate, workOrder);
router.put('/update/:workOrderCode', authenticate, workOrder);
router.delete('/delete/:workOrderCode', authenticate, workOrder);

export default router;
