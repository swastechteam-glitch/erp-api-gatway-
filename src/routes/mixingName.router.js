import express from 'express';
import { mixingName } from '../controllers/mixingName.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Mixing Name master paths (mounted at /api/v1/mixing-name).
router.get('/lists', authenticate, mixingName);                       // GET    list
router.get('/list/:mixingNameCode', authenticate, mixingName);       // GET    one
router.post('/create', authenticate, mixingName);                    // POST   create
router.put('/update/:mixingNameCode', authenticate, mixingName);     // PUT    update
router.delete('/delete/:mixingNameCode', authenticate, mixingName);  // DELETE delete

export default router;
