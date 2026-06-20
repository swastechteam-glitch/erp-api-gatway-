import express from 'express';
import { serviceOrderExpenses } from '../controllers/serviceOrderExpenses.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Service Order Expenses master paths (mounted at /api/v1/service-order-expenses).
router.get('/lists', authenticate, serviceOrderExpenses);                        // GET    list
router.get('/list/:soExpensesCode', authenticate, serviceOrderExpenses);         // GET    one
router.post('/create', authenticate, serviceOrderExpenses);                      // POST   create
router.put('/update/:soExpensesCode', authenticate, serviceOrderExpenses);       // PUT    update
router.delete('/delete/:soExpensesCode', authenticate, serviceOrderExpenses);    // DELETE delete

export default router;
