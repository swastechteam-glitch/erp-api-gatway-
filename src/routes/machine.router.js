import express from 'express';
import { machine } from '../controllers/machine.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Machine master paths (mounted at /api/v1/machine).
router.get('/lists', authenticate, machine);                       // GET    list

// Dropdown sources
router.get('/departments', authenticate, machine);                 // GET
router.get('/machine-types', authenticate, machine);               // GET
router.get('/machine-makes', authenticate, machine);               // GET
router.get('/branches', authenticate, machine);                    // GET
router.get('/main-machines', authenticate, machine);               // GET (?departmentCode=)

router.get('/list/:machineCode', authenticate, machine);           // GET    one
router.post('/create', authenticate, machine);                     // POST   create
router.put('/update/:machineCode', authenticate, machine);         // PUT    update
router.delete('/delete/:machineCode', authenticate, machine);      // DELETE delete

export default router;
