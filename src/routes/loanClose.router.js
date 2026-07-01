import express from 'express';
import { loanClose } from '../controllers/loanClose.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Loan Close paths (mounted at /api/v1/loan-close). Forwarded to core.
router.get('/options', authenticate, loanClose);                 // GET    pay heads + employees + no
router.get('/pending', authenticate, loanClose);                 // GET    pending balance
router.get('/list', authenticate, loanClose);                    // GET    closings grid
router.post('/save', authenticate, loanClose);                   // POST   save
router.delete('/:loanClosedCode', authenticate, loanClose);      // DELETE remove one closing

export default router;
