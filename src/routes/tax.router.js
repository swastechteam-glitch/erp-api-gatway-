import express from 'express';
import { tax } from '../controllers/tax.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Tax master paths (mounted at /api/v1/tax).
router.get('/lists', authenticate, tax);                // GET    list
router.get('/list/:taxCode', authenticate, tax);        // GET    one
router.post('/create', authenticate, tax);              // POST   create
router.put('/update/:taxCode', authenticate, tax);      // PUT    update
router.delete('/delete/:taxCode', authenticate, tax);   // DELETE delete

export default router;
