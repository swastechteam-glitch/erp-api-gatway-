import express from 'express';
import { employeeBatch } from '../controllers/employeeBatch.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Employee Batch master paths (mounted at /api/v1/employee-batch). Forwarded to core.
router.get('/lists', authenticate, employeeBatch);                    // GET    list
router.get('/list/:employeeBatchCode', authenticate, employeeBatch);  // GET    one
router.post('/create', authenticate, employeeBatch);                  // POST   create
router.put('/update/:employeeBatchCode', authenticate, employeeBatch);// PUT    update
router.delete('/delete/:employeeBatchCode', authenticate, employeeBatch);// DELETE delete

export default router;
