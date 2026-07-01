import express from 'express';
import { bloodGroup } from '../controllers/bloodGroup.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Blood Group master paths (mounted at /api/v1/blood-group). Forwarded to core.
router.get('/lists', authenticate, bloodGroup);                  // GET    list
router.get('/list/:bloodGroupCode', authenticate, bloodGroup);  // GET    one
router.post('/create', authenticate, bloodGroup);               // POST   create
router.put('/update/:bloodGroupCode', authenticate, bloodGroup); // PUT    update
router.delete('/delete/:bloodGroupCode', authenticate, bloodGroup); // DELETE delete

export default router;
