import express from 'express';
import { wasteInvoice } from '../controllers/wasteInvoice.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Waste Invoice paths (mounted at /api/v1/waste-invoice).
router.get('/options', authenticate, wasteInvoice);                       // GET    dropdowns + settings
router.get('/next-invoice-no', authenticate, wasteInvoice);              // GET    next invoice no (by tax type)
router.get('/pending-dc', authenticate, wasteInvoice);                   // GET    pending Waste DCs
router.get('/pending-weighbridge', authenticate, wasteInvoice);         // GET    pending weighments
router.get('/dc-items', authenticate, wasteInvoice);                     // GET    items of a DC
router.get('/dc-item-bales', authenticate, wasteInvoice);               // GET    bales of a DC item
router.get('/lists', authenticate, wasteInvoice);                        // GET    filtered list
router.get('/list/:wasteInvoiceCode', authenticate, wasteInvoice);      // GET    one (header + details)
router.post('/create', authenticate, wasteInvoice);                      // POST   create
router.put('/update/:wasteInvoiceCode', authenticate, wasteInvoice);    // PUT    update
router.delete('/delete/:wasteInvoiceCode', authenticate, wasteInvoice); // DELETE delete

export default router;
