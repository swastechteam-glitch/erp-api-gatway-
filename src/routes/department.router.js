import express from 'express';
import { department } from '../controllers/department.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Department master paths (mounted at /api/v1/department).
router.get('/lists', authenticate, department);                       // GET    list
router.get('/department-groups', authenticate, department);           // GET    dropdown source
router.get('/list/:departmentCode', authenticate, department);        // GET    one
router.post('/create', authenticate, department);                     // POST   create
router.put('/update/:departmentCode', authenticate, department);      // PUT    update
router.delete('/delete/:departmentCode', authenticate, department);   // DELETE delete

export default router;
