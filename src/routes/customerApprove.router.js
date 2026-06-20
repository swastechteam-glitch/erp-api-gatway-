import express from 'express';
import { customerApprove } from '../controllers/customerApprove.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Customer Approve master paths (mounted at /api/v1/customer-approve).
router.get('/options', authenticate, customerApprove);                 // GET    dropdown lookups
router.get('/lists', authenticate, customerApprove);                   // GET    list
router.get('/list/:customerCode', authenticate, customerApprove);      // GET    one
router.post('/create', authenticate, customerApprove);                 // POST   approve (create)
router.put('/update/:customerCode', authenticate, customerApprove);    // PUT    approve (update)
router.delete('/delete/:customerCode', authenticate, customerApprove); // DELETE delete

export default router;
