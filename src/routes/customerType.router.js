import express from 'express';
import { customerType } from '../controllers/customerType.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Customer Type master paths (mounted at /api/v1/customer-type).
router.get('/lists', authenticate, customerType);                          // GET    list
router.get('/list/:customerTypeCode', authenticate, customerType);         // GET    one
router.post('/create', authenticate, customerType);                        // POST   create
router.put('/update/:customerTypeCode', authenticate, customerType);       // PUT    update
router.delete('/delete/:customerTypeCode', authenticate, customerType);    // DELETE delete

export default router;
