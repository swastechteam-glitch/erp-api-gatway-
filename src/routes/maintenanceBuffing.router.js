import express from 'express';
import { maintenanceBuffing } from '../controllers/maintenanceBuffing.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Maintenance Buffing (frmMaintenanceBuffing) — mounted at /api/v1/maintenance-buffing.
router.get('/options', authenticate, maintenanceBuffing);
router.get('/machines', authenticate, maintenanceBuffing);
router.get('/last-date', authenticate, maintenanceBuffing);
router.get('/lists', authenticate, maintenanceBuffing);
router.get('/list/:code', authenticate, maintenanceBuffing);
router.post('/create', authenticate, maintenanceBuffing);
router.put('/update/:code', authenticate, maintenanceBuffing);
router.delete('/delete/:code', authenticate, maintenanceBuffing);

export default router;
