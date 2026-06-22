import express from 'express';
import { itemRequisition } from '../controllers/itemRequisition.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Item Purchase Requisition paths (mounted at /api/v1/item-requisition).
router.get('/options', authenticate, itemRequisition);
router.get('/machines', authenticate, itemRequisition);
router.get('/next-no', authenticate, itemRequisition);
router.get('/item/:itemCode/pending', authenticate, itemRequisition);
router.get('/lists', authenticate, itemRequisition);
router.get('/list/:code', authenticate, itemRequisition);
router.post('/create', authenticate, itemRequisition);
router.put('/update/:code', authenticate, itemRequisition);
router.delete('/delete/:code', authenticate, itemRequisition);

export default router;
