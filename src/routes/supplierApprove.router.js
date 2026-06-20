import express from 'express';
import { supplier } from '../controllers/supplierApprove.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Supplier Approval master paths (mounted at /api/v1/supplier).
router.get('/options', authenticate, supplier);                  // GET    State/Bank/Company lookups
router.get('/lists', authenticate, supplier);                    // GET    list
router.get('/list/:supplierCode', authenticate, supplier);       // GET    one
router.post('/create', authenticate, supplier);                  // POST   approve (create)
router.put('/update/:supplierCode', authenticate, supplier);     // PUT    approve (update)
router.delete('/delete/:supplierCode', authenticate, supplier);  // DELETE delete

export default router;
