import express from 'express';
import { vehicleInOut } from '../controllers/vehicleInOut.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Vehicle IN / OUT — Pass Entry (mounted at /api/v1/vehicle-in-out).
router.get('/options', authenticate, vehicleInOut);
router.get('/next-no', authenticate, vehicleInOut);
router.get('/pending', authenticate, vehicleInOut);
router.get('/lists', authenticate, vehicleInOut);
router.get('/employees', authenticate, vehicleInOut);
router.get('/employee-by-id/:empId', authenticate, vehicleInOut);
router.get('/employee-photo/:employeeCode', authenticate, vehicleInOut);
router.get('/vehicle-opening/:vehicleCode', authenticate, vehicleInOut);
router.get('/record/:code', authenticate, vehicleInOut);
router.post('/save', authenticate, vehicleInOut);

export default router;
