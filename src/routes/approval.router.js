import express from 'express';
import { approval } from '../controllers/approval.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Approval master paths (mounted at /api/v1/approval).
router.get('/lists', authenticate, approval);                     // GET    list
router.get('/list/:approvalCode', authenticate, approval);        // GET    one
router.post('/create', authenticate, approval);                   // POST   create
router.put('/update/:approvalCode', authenticate, approval);      // PUT    update
router.delete('/delete/:approvalCode', authenticate, approval);   // DELETE delete

export default router;
