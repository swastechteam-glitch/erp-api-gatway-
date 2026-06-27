import express from 'express';
import { solarGroup } from '../controllers/solarGroup.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// solar-group master paths (mounted at /api/v1/solar-group).
router.get('/lists', authenticate, solarGroup);                       // GET    list
router.get('/list/:solarGroupCode', authenticate, solarGroup);              // GET    one
router.post('/create', authenticate, solarGroup);                     // POST   create
router.put('/update/:solarGroupCode', authenticate, solarGroup);            // PUT    update
router.delete('/delete/:solarGroupCode', authenticate, solarGroup);         // DELETE delete

export default router;
