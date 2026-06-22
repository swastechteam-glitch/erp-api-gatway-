import express from 'express';
import { cottonIssue } from '../controllers/cottonIssue.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Cotton Issue paths (mounted at /api/v1/cotton-issue).
router.get('/next-no', authenticate, cottonIssue);
router.get('/requisitions', authenticate, cottonIssue);
router.get('/requisition/:code', authenticate, cottonIssue);
router.get('/bales-stock/:arrivalCode', authenticate, cottonIssue);
router.get('/lists', authenticate, cottonIssue);
router.get('/list/:code', authenticate, cottonIssue);
router.post('/create', authenticate, cottonIssue);
router.put('/update/:code', authenticate, cottonIssue);
router.delete('/delete/:code', authenticate, cottonIssue);

export default router;
