import express from 'express';
import { departmentGroup } from '../controllers/departmentGroup.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Department Group master paths (mounted at /api/v1/department-group).
router.get('/lists', authenticate, departmentGroup);                          // GET    list
router.get('/list/:departmentGroupCode', authenticate, departmentGroup);      // GET    one
router.post('/create', authenticate, departmentGroup);                        // POST   create
router.put('/update/:departmentGroupCode', authenticate, departmentGroup);    // PUT    update
router.delete('/delete/:departmentGroupCode', authenticate, departmentGroup); // DELETE delete

export default router;
