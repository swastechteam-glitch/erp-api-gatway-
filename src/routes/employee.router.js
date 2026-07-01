import express from 'express';
import { employee } from '../controllers/employee.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Employee master paths (mounted at /api/v1/employee). Forwarded to core.
router.get('/options', authenticate, employee);                       // GET    all simple lookups
router.get('/designations/:departmentCode', authenticate, employee);  // GET    designations for a dept
router.get('/vehicles/:routeCode', authenticate, employee);           // GET    vehicles for a route
router.get('/shifts/:shiftGroupCode', authenticate, employee);        // GET    shifts for a shift group
router.get('/rooms/:hostelTypeCode', authenticate, employee);         // GET    rooms for a hostel type
router.get('/districts/:stateCode', authenticate, employee);          // GET    districts for a state
router.get('/grades/:empCategoryCode', authenticate, employee);       // GET    grades for a category
router.get('/next-id/:empGroupCode', authenticate, employee);         // GET    next employee id
router.get('/form12/:empGroupCode', authenticate, employee);          // GET    next form12 no
router.get('/exists/:employeeId', authenticate, employee);            // GET    employee-id duplicate check
router.get('/lists', authenticate, employee);                         // GET    list
router.get('/list/:employeeCode', authenticate, employee);            // GET    one
router.post('/create', authenticate, employee);                       // POST   create
router.put('/update/:employeeCode', authenticate, employee);          // PUT    update
router.delete('/delete/:employeeCode', authenticate, employee);       // DELETE delete

export default router;
