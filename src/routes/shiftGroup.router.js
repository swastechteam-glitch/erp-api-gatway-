import express from 'express';
import { shiftGroup } from '../controllers/shiftGroup.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Shift Group master paths (mounted at /api/v1/shift-group). Forwarded to core.
router.get('/lists', authenticate, shiftGroup);                    // GET    list
router.get('/list/:shiftGroupCode', authenticate, shiftGroup);     // GET    one
router.post('/create', authenticate, shiftGroup);                  // POST   create
router.put('/update/:shiftGroupCode', authenticate, shiftGroup);   // PUT    update
router.delete('/delete/:shiftGroupCode', authenticate, shiftGroup);// DELETE delete

export default router;
