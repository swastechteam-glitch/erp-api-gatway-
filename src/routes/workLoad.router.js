import express from 'express';
import { workLoad } from '../controllers/workLoad.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Work Load master paths (mounted at /api/v1/work-load). Forwarded to core.
router.get('/options', authenticate, workLoad);                       // GET    departments
router.get('/designations/:departmentCode', authenticate, workLoad); // GET    designations for a dept
router.get('/lists', authenticate, workLoad);                        // GET    list
router.get('/list/:workLoadCode', authenticate, workLoad);           // GET    one
router.post('/create', authenticate, workLoad);                      // POST   create
router.put('/update/:workLoadCode', authenticate, workLoad);         // PUT    update
router.delete('/delete/:workLoadCode', authenticate, workLoad);      // DELETE delete

export default router;
