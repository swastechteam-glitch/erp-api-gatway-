import express from 'express';
import { vehicleMake } from '../controllers/vehicleMake.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Vehicle Make master paths (mounted at /api/v1/vehicle-make).
router.get('/lists', authenticate, vehicleMake);                          // GET    list
router.get('/list/:vehicleMakeCode', authenticate, vehicleMake);         // GET    one
router.post('/create', authenticate, vehicleMake);                       // POST   create
router.put('/update/:vehicleMakeCode', authenticate, vehicleMake);       // PUT    update
router.delete('/delete/:vehicleMakeCode', authenticate, vehicleMake);    // DELETE delete

export default router;
