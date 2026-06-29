import express from 'express';
import { holiday } from '../controllers/holiday.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Holiday master paths (mounted at /api/v1/holiday). Forwarded to core.
router.get('/options', authenticate, holiday);            // GET    employee groups
router.get('/lists', authenticate, holiday);              // GET    list
router.get('/record/:code', authenticate, holiday);       // GET    one
router.post('/create', authenticate, holiday);            // POST   create
router.put('/update/:code', authenticate, holiday);       // PUT    update
router.delete('/delete/:code', authenticate, holiday);    // DELETE delete

export default router;
