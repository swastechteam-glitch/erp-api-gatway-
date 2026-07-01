import express from 'express';
import { shift } from '../controllers/shift.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Shift master paths (mounted at /api/v1/shift). Forwarded to core.
router.get('/options', authenticate, shift);              // GET    lookups
router.get('/lists', authenticate, shift);               // GET    list
router.get('/list/:shiftCode', authenticate, shift);     // GET    one
router.post('/create', authenticate, shift);             // POST   create
router.put('/update/:shiftCode', authenticate, shift);   // PUT    update
router.delete('/delete/:shiftCode', authenticate, shift);// DELETE delete

export default router;
