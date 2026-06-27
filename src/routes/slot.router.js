import express from 'express';
import { slot } from '../controllers/slot.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// slot master paths (mounted at /api/v1/slot).
router.get('/lists', authenticate, slot);                       // GET    list
router.get('/list/:slotCode', authenticate, slot);              // GET    one
router.post('/create', authenticate, slot);                     // POST   create
router.put('/update/:slotCode', authenticate, slot);            // PUT    update
router.delete('/delete/:slotCode', authenticate, slot);         // DELETE delete

export default router;
