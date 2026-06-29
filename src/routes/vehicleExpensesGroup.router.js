import express from 'express';
import { vehicleExpensesGroup } from '../controllers/vehicleExpensesGroup.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// vehicle-expenses-group master paths (mounted at /api/v1/vehicle-expenses-group).
router.get('/lists', authenticate, vehicleExpensesGroup);                                  // GET    list
router.get('/list/:vehicleExpensesGroupCode', authenticate, vehicleExpensesGroup);         // GET    one
router.post('/create', authenticate, vehicleExpensesGroup);                                // POST   create
router.put('/update/:vehicleExpensesGroupCode', authenticate, vehicleExpensesGroup);       // PUT    update
router.delete('/delete/:vehicleExpensesGroupCode', authenticate, vehicleExpensesGroup);    // DELETE delete

export default router;
