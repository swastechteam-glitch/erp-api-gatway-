import express from 'express';
import { wasteInvoiceApproval } from '../controllers/wasteInvoiceApproval.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Waste Invoice Approval paths (mounted at /api/v1/waste-invoice-approval).
router.get('/options', authenticate, wasteInvoiceApproval);          // GET    vehicles
router.get('/pending', authenticate, wasteInvoiceApproval);          // GET    pending invoices (filtered)
router.get('/detail/:code', authenticate, wasteInvoiceApproval);     // GET    one (edit panel)
router.put('/update/:code', authenticate, wasteInvoiceApproval);     // PUT    update date/vehicle/permit/delivery
router.post('/approve', authenticate, wasteInvoiceApproval);         // POST   approve
router.delete('/reject/:code', authenticate, wasteInvoiceApproval);  // DELETE reject

export default router;
