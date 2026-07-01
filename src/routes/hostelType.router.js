import express from 'express';
import { hostelType } from '../controllers/hostelType.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Hostel Type master paths (mounted at /api/v1/hostel-type). Forwarded to core.
router.get('/lists', authenticate, hostelType);                   // GET    list
router.get('/list/:hostelTypeCode', authenticate, hostelType);    // GET    one
router.post('/create', authenticate, hostelType);                 // POST   create
router.put('/update/:hostelTypeCode', authenticate, hostelType);  // PUT    update
router.delete('/delete/:hostelTypeCode', authenticate, hostelType);// DELETE delete

export default router;
