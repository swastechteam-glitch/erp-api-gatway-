import express from 'express';
import { taxType } from '../controllers/taxType.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Tax Type master paths (mounted at /api/v1/tax-type).
router.get('/sales-types', authenticate, taxType);              // GET    sales type dropdown
router.get('/lists', authenticate, taxType);                    // GET    list
router.get('/list/:taxTypeCode', authenticate, taxType);        // GET    one
router.post('/create', authenticate, taxType);                  // POST   create
router.put('/update/:taxTypeCode', authenticate, taxType);      // PUT    update
router.delete('/delete/:taxTypeCode', authenticate, taxType);   // DELETE delete

export default router;
