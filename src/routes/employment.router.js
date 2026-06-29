import express from 'express';
import { employment } from '../controllers/employment.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Type Of Employment master paths (mounted at /api/v1/employment). Forwarded to core.
router.get('/lists', authenticate, employment);                     // GET    list
router.get('/list/:employmentCode', authenticate, employment);      // GET    one
router.post('/create', authenticate, employment);                   // POST   create
router.put('/update/:employmentCode', authenticate, employment);    // PUT    update
router.delete('/delete/:employmentCode', authenticate, employment); // DELETE delete

export default router;
