import express from 'express';
import { maintenanceDesignation } from '../controllers/maintenanceDesignation.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Maintenance Designation master CRUD — mounted at /api/v1/maintenance-designation.
router.get('/lists', authenticate, maintenanceDesignation);
router.get('/list/:maintenanceDesignationCode', authenticate, maintenanceDesignation);
router.post('/create', authenticate, maintenanceDesignation);
router.put('/update/:maintenanceDesignationCode', authenticate, maintenanceDesignation);
router.delete('/delete/:maintenanceDesignationCode', authenticate, maintenanceDesignation);

export default router;
