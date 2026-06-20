import express from 'express';
import { vehicle } from '../controllers/vehicle.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Vehicle master paths (mounted at /api/v1/vehicle).
router.get('/options', authenticate, vehicle);                      // GET    dropdown lookups
router.get('/lists', authenticate, vehicle);                        // GET    list
router.get('/list/:vehicleCode', authenticate, vehicle);            // GET    one
router.post('/create', authenticate, vehicle);                      // POST   create
router.put('/update/:vehicleCode', authenticate, vehicle);          // PUT    update
router.delete('/delete/:vehicleCode', authenticate, vehicle);       // DELETE delete

export default router;
