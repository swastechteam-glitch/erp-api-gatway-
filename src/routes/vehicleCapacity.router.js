import express from 'express';
import { vehicleCapacity } from '../controllers/vehicleCapacity.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Vehicle Capacity master paths (mounted at /api/v1/vehicle-capacity).
router.get('/lists', authenticate, vehicleCapacity);                            // GET    list
router.get('/list/:vehicleCapacityCode', authenticate, vehicleCapacity);       // GET    one
router.post('/create', authenticate, vehicleCapacity);                         // POST   create
router.put('/update/:vehicleCapacityCode', authenticate, vehicleCapacity);     // PUT    update
router.delete('/delete/:vehicleCapacityCode', authenticate, vehicleCapacity);  // DELETE delete

export default router;
