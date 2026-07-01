import express from 'express';
import { designation } from '../controllers/designation.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Designation master paths (mounted at /api/v1/designation). Forwarded to core.
router.get('/options', authenticate, designation);                   // GET    departments
router.get('/lists', authenticate, designation);                     // GET    list
router.get('/list/:designationCode', authenticate, designation);     // GET    one
router.post('/create', authenticate, designation);                   // POST   create
router.put('/update/:designationCode', authenticate, designation);   // PUT    update
router.delete('/delete/:designationCode', authenticate, designation); // DELETE delete

export default router;
