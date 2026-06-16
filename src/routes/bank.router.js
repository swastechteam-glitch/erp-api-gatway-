import express from 'express';
import { bank } from '../controllers/bank.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Bank master paths (mounted at /api/v1/bank). Each is forwarded to the core service.
router.get('/lists',authenticate, bank);                // GET    list
router.get('/list/:bankCode',authenticate, bank);       // GET    one
router.post('/create',authenticate, bank);               // POST   create
router.put('/update/:bankCode',authenticate, bank);     // PUT    update
router.delete('/delete/:bankCode',authenticate, bank);  // DELETE delete

export default router;
