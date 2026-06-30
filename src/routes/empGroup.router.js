import express from 'express';
import { empGroup } from '../controllers/empGroup.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Employee Group master paths (mounted at /api/v1/emp-group). Forwarded to core.
router.get('/lists', authenticate, empGroup);                 // GET    list
router.get('/list/:empGroupCode', authenticate, empGroup);    // GET    one
router.post('/create', authenticate, empGroup);               // POST   create
router.put('/update/:empGroupCode', authenticate, empGroup);  // PUT    update
router.delete('/delete/:empGroupCode', authenticate, empGroup); // DELETE delete

export default router;
