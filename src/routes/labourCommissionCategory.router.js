import express from 'express';
import { labourCommissionCategory } from '../controllers/labourCommissionCategory.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Labour Commission Category paths (mounted at /api/v1/labour-commission-category). Forwarded to core.
router.get('/options', authenticate, labourCommissionCategory);                 // GET    departments
router.get('/lists', authenticate, labourCommissionCategory);                   // GET    list
router.get('/list/:departmentCode', authenticate, labourCommissionCategory);    // GET    one
router.post('/create', authenticate, labourCommissionCategory);                 // POST   create
router.put('/update/:departmentCode', authenticate, labourCommissionCategory);  // PUT    update
router.delete('/delete/:departmentCode', authenticate, labourCommissionCategory); // DELETE delete

export default router;
