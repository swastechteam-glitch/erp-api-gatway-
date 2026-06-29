import express from 'express';
import { countName } from '../controllers/countName.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Count Name master paths (mounted at /api/v1/count-name).
router.get('/count-groups', authenticate, countName);              // GET    Count Group dropdown lookup
router.get('/lists', authenticate, countName);                     // GET    list
router.get('/list/:countNameCode', authenticate, countName);       // GET    one
router.post('/create', authenticate, countName);                   // POST   create
router.put('/update/:countNameCode', authenticate, countName);     // PUT    update
router.delete('/delete/:countNameCode', authenticate, countName);  // DELETE delete

export default router;
