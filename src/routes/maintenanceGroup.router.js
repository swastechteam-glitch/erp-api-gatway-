import express from 'express';
import { maintenanceGroup } from '../controllers/maintenanceGroup.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Maintenance Group master paths (mounted at /api/v1/maintenance-group).
router.get('/lists', authenticate, maintenanceGroup);                          // GET    list
router.get('/list/:maintenanceGroupCode', authenticate, maintenanceGroup);     // GET    one
router.post('/create', authenticate, maintenanceGroup);                        // POST   create
router.put('/update/:maintenanceGroupCode', authenticate, maintenanceGroup);   // PUT    update
router.delete('/delete/:maintenanceGroupCode', authenticate, maintenanceGroup);// DELETE delete

export default router;
