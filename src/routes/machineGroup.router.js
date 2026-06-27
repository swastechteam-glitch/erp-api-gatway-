import express from 'express';
import { machineGroup } from '../controllers/machineGroup.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// machine-group master paths (mounted at /api/v1/machine-group).
router.get('/lists', authenticate, machineGroup);                       // GET    list
router.get('/list/:machineGroupCode', authenticate, machineGroup);              // GET    one
router.post('/create', authenticate, machineGroup);                     // POST   create
router.put('/update/:machineGroupCode', authenticate, machineGroup);            // PUT    update
router.delete('/delete/:machineGroupCode', authenticate, machineGroup);         // DELETE delete

export default router;
