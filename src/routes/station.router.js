import express from 'express';
import { station } from '../controllers/station.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Station master paths (mounted at /api/v1/station).
router.get('/options', authenticate, station);                      // GET    State lookup
router.get('/lists', authenticate, station);                        // GET    list
router.get('/list/:stationCode', authenticate, station);            // GET    one
router.post('/create', authenticate, station);                      // POST   create
router.put('/update/:stationCode', authenticate, station);          // PUT    update
router.delete('/delete/:stationCode', authenticate, station);       // DELETE delete

export default router;
