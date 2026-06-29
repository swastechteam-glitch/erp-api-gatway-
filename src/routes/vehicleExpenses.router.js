import express from 'express';
import { vehicleExpenses } from '../controllers/vehicleExpenses.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// vehicle-expenses master paths (mounted at /api/v1/vehicle-expenses).
router.get('/lists', authenticate, vehicleExpenses);                              // GET    list
router.get('/list/:vehicleExpensesCode', authenticate, vehicleExpenses);         // GET    one
router.post('/create', authenticate, vehicleExpenses);                           // POST   create
router.put('/update/:vehicleExpensesCode', authenticate, vehicleExpenses);       // PUT    update
router.delete('/delete/:vehicleExpensesCode', authenticate, vehicleExpenses);    // DELETE delete

export default router;
