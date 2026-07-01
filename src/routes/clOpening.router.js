import express from 'express';
import { clOpening } from '../controllers/clOpening.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// CL Opening Entry paths (mounted at /api/v1/clopening). Forwarded to core.
router.get('/options', authenticate, clOpening);                          // GET    employees
router.get('/lists', authenticate, clOpening);                           // GET    list
router.post('/create', authenticate, clOpening);                         // POST   create
router.put('/update/:clCode', authenticate, clOpening);                  // PUT    update
router.delete('/delete/:clYear/:employeeCode', authenticate, clOpening); // DELETE delete

export default router;
