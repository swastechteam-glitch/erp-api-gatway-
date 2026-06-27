import express from 'express';
import { generatorMachineGroup } from '../controllers/generatorMachineGroup.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// generator-machine-group master paths (mounted at /api/v1/generator-machine-group).
router.get('/lists', authenticate, generatorMachineGroup);                       // GET    list
router.get('/list/:generatorMachineGroupCode', authenticate, generatorMachineGroup);              // GET    one
router.post('/create', authenticate, generatorMachineGroup);                     // POST   create
router.put('/update/:generatorMachineGroupCode', authenticate, generatorMachineGroup);            // PUT    update
router.delete('/delete/:generatorMachineGroupCode', authenticate, generatorMachineGroup);         // DELETE delete

export default router;
