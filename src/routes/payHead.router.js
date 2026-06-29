import express from 'express';
import { payHead } from '../controllers/payHead.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Pay Head master paths (mounted at /api/v1/pay-head). Forwarded to core.
router.get('/options', authenticate, payHead);                  // GET    types
router.get('/groups/:typeCode', authenticate, payHead);         // GET    groups for a type
router.get('/lists', authenticate, payHead);                    // GET    list
router.get('/list/:payHeadCode', authenticate, payHead);        // GET    one
router.post('/create', authenticate, payHead);                  // POST   create
router.put('/update/:payHeadCode', authenticate, payHead);      // PUT    update
router.delete('/delete/:payHeadCode', authenticate, payHead);   // DELETE delete

export default router;
