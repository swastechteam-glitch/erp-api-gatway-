import express from 'express';
import { ebMeter } from '../controllers/ebMeter.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// eb-meter master paths (mounted at /api/v1/eb-meter).
router.get('/lists', authenticate, ebMeter);                       // GET    list
router.get('/list/:ebMeterCode', authenticate, ebMeter);              // GET    one
router.post('/create', authenticate, ebMeter);                     // POST   create
router.put('/update/:ebMeterCode', authenticate, ebMeter);            // PUT    update
router.delete('/delete/:ebMeterCode', authenticate, ebMeter);         // DELETE delete

export default router;
