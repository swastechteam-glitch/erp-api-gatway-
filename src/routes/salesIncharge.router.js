import express from 'express';
import { salesIncharge } from '../controllers/salesIncharge.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Sales Incharge master paths (mounted at /api/v1/sales-incharge).
router.get('/lists', authenticate, salesIncharge);                       // GET    list
router.get('/list/:supervisorCode', authenticate, salesIncharge);        // GET    one
router.post('/create', authenticate, salesIncharge);                     // POST   create
router.put('/update/:supervisorCode', authenticate, salesIncharge);      // PUT    update
router.delete('/delete/:supervisorCode', authenticate, salesIncharge);   // DELETE delete

export default router;
