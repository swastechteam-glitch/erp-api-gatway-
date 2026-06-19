import express from 'express';
import { machineType } from '../controllers/machineType.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Machine Type master paths (mounted at /api/v1/machine-type).
router.get('/lists', authenticate, machineType);                          // GET    list
router.get('/list/:machineTypeCode', authenticate, machineType);         // GET    one
router.post('/create', authenticate, machineType);                       // POST   create
router.put('/update/:machineTypeCode', authenticate, machineType);       // PUT    update
router.delete('/delete/:machineTypeCode', authenticate, machineType);    // DELETE delete

export default router;
