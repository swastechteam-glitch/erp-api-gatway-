import express from 'express';
import { solarLocation } from '../controllers/solarLocation.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// solar-location master paths (mounted at /api/v1/solar-location).
router.get('/lists', authenticate, solarLocation);                       // GET    list
router.get('/list/:solarLocationCode', authenticate, solarLocation);              // GET    one
router.post('/create', authenticate, solarLocation);                     // POST   create
router.put('/update/:solarLocationCode', authenticate, solarLocation);            // PUT    update
router.delete('/delete/:solarLocationCode', authenticate, solarLocation);         // DELETE delete

export default router;
