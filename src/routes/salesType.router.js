import express from 'express';
import { salesType } from '../controllers/salesType.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Sales Type master paths (mounted at /api/v1/sales-type).
router.get('/lists', authenticate, salesType);                       // GET    list
router.get('/list/:salesTypeCode', authenticate, salesType);         // GET    one
router.post('/create', authenticate, salesType);                     // POST   create
router.put('/update/:salesTypeCode', authenticate, salesType);       // PUT    update
router.delete('/delete/:salesTypeCode', authenticate, salesType);    // DELETE delete

export default router;
