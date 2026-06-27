import express from 'express';
import { ebRate } from '../controllers/ebRate.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// eb-rate master paths (mounted at /api/v1/eb-rate).
router.get('/lists', authenticate, ebRate);                       // GET    list
router.get('/list/:ebRateCode', authenticate, ebRate);              // GET    one
router.post('/create', authenticate, ebRate);                     // POST   create
router.put('/update/:ebRateCode', authenticate, ebRate);            // PUT    update
router.delete('/delete/:ebRateCode', authenticate, ebRate);         // DELETE delete

export default router;
