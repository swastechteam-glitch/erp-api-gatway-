import express from 'express';
import { stoppageReason } from '../controllers/stoppageReason.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Stoppage Reason master paths (mounted at /api/v1/stoppage-reason).
router.get('/options', authenticate, stoppageReason);                        // GET    lookups
router.get('/lists', authenticate, stoppageReason);                          // GET    list
router.get('/list/:stoppageReasonCode', authenticate, stoppageReason);      // GET    one
router.post('/create', authenticate, stoppageReason);                       // POST   create
router.put('/update/:stoppageReasonCode', authenticate, stoppageReason);    // PUT    update
router.delete('/delete/:stoppageReasonCode', authenticate, stoppageReason); // DELETE delete

export default router;
