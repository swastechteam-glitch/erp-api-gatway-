import express from 'express';
import { scrapInvoice } from '../controllers/scrapInvoice.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Scrap Invoice paths (mounted at /api/v1/scrap-invoice).
router.get('/options', authenticate, scrapInvoice);                      // GET    dropdowns
router.get('/next-invoice-no', authenticate, scrapInvoice);            // GET    next invoice no (by type)
router.get('/lists', authenticate, scrapInvoice);                        // GET    filtered list
router.get('/list/:scrapInvoiceCode', authenticate, scrapInvoice);      // GET    one (header + items)
router.post('/create', authenticate, scrapInvoice);                      // POST   create
router.put('/update/:scrapInvoiceCode', authenticate, scrapInvoice);    // PUT    update
router.delete('/delete/:scrapInvoiceCode', authenticate, scrapInvoice); // DELETE delete

export default router;
