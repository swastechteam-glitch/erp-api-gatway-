import express from 'express';
import { loanEntry } from '../controllers/loanEntry.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Loan Advance Entry paths (mounted at /api/v1/loan-entry). Forwarded to core.
router.get('/options', authenticate, loanEntry);                    // GET    loan pay heads + employees
router.get('/employee-lookup', authenticate, loanEntry);            // GET    find employee by EmployeeID
router.get('/employee-detail/:employeeCode', authenticate, loanEntry); // GET details + cur balance
router.get('/list', authenticate, loanEntry);                       // GET    existing loans grid
router.get('/details/:loanCode', authenticate, loanEntry);          // GET    schedule for edit
router.post('/save', authenticate, loanEntry);                      // POST   save (add / edit)
router.delete('/:loanCode', authenticate, loanEntry);               // DELETE remove one loan

export default router;
