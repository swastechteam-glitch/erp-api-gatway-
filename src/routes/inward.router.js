import express from 'express';
import { inward } from '../controllers/inward.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Inward / Purchase Order Received paths (mounted at /api/v1/inward).
router.get('/options', authenticate, inward);
router.get('/suppliers', authenticate, inward);
router.get('/pending', authenticate, inward);
router.get('/gate-pendings', authenticate, inward);
router.get('/next-no', authenticate, inward);
// Inward Direct (Without PO) — additive lookups.
router.get('/direct/requisitions', authenticate, inward);
router.get('/direct/requisition-items', authenticate, inward);
router.get('/direct/items', authenticate, inward);
router.get('/direct/stock', authenticate, inward);
router.get('/lists', authenticate, inward);
router.get('/list/:code', authenticate, inward);
router.post('/create', authenticate, inward);
router.put('/update/:code', authenticate, inward);
router.delete('/delete/:code', authenticate, inward);

export default router;
