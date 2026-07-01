import express from 'express';
import { itemIssue } from '../controllers/itemIssue.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Item Issue paths (mounted at /api/v1/item-issue).
router.get('/options', authenticate, itemIssue);
router.get('/pending-indents', authenticate, itemIssue);
router.post('/pull-indent', authenticate, itemIssue);
router.post('/item-history', authenticate, itemIssue);
router.post('/create', authenticate, itemIssue);

export default router;
