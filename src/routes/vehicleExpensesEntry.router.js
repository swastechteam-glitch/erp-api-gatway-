import express from 'express';
import { vehicleExpensesEntry } from '../controllers/vehicleExpensesEntry.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// vehicle-expenses-entry transaction paths (mounted at /api/v1/vehicle-expenses-entry).
router.get('/options', authenticate, vehicleExpensesEntry);
router.get('/lists', authenticate, vehicleExpensesEntry);
router.get('/list/:code', authenticate, vehicleExpensesEntry);
router.post('/create', authenticate, vehicleExpensesEntry);
router.put('/update/:code', authenticate, vehicleExpensesEntry);
router.delete('/delete/:code', authenticate, vehicleExpensesEntry);

export default router;
