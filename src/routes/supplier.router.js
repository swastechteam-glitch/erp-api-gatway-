import express from 'express';
import { supplier } from '../controllers/supplier.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Supplier master paths (mounted at /api/v1/supplier).
router.get('/options', authenticate, supplier);                  // GET    State/Bank/Company lookups
router.get('/lists', authenticate, supplier);                    // GET    list
router.get('/list/:supplierCode', authenticate, supplier);       // GET    one
router.post('/create', authenticate, supplier);                  // POST   create
router.put('/update/:supplierCode', authenticate, supplier);     // PUT    update
router.delete('/delete/:supplierCode', authenticate, supplier);  // DELETE delete

export default router;
