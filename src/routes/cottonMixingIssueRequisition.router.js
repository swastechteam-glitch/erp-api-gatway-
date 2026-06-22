import express from 'express';
import { cottonMixingIssueRequisition } from '../controllers/cottonMixingIssueRequisition.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Cotton Mixing Issue Requisition paths (mounted at /api/v1/cotton-mixing-issue-requisition).
router.get('/options', authenticate, cottonMixingIssueRequisition);
router.get('/next-no', authenticate, cottonMixingIssueRequisition);
router.get('/lot-stock', authenticate, cottonMixingIssueRequisition);
router.get('/bales-stock/:arrivalCode', authenticate, cottonMixingIssueRequisition);
router.get('/pre-load', authenticate, cottonMixingIssueRequisition);
router.get('/lists', authenticate, cottonMixingIssueRequisition);
router.get('/list/:code', authenticate, cottonMixingIssueRequisition);
router.post('/create', authenticate, cottonMixingIssueRequisition);
router.put('/update/:code', authenticate, cottonMixingIssueRequisition);
router.delete('/delete/:code', authenticate, cottonMixingIssueRequisition);

export default router;
