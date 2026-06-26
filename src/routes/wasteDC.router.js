import express from 'express';
import { wasteDC } from '../controllers/wasteDC.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Waste DC paths (mounted at /api/v1/waste-dc).
router.get('/options', authenticate, wasteDC);                  // GET    dropdown lookups + settings
router.get('/next-dc-no', authenticate, wasteDC);              // GET    next DC no
router.get('/available-bales', authenticate, wasteDC);         // GET    stock bales not yet DC'd
router.get('/bale', authenticate, wasteDC);                    // GET    single bale lookup
router.get('/lists', authenticate, wasteDC);                   // GET    filtered list
router.get('/list/:wasteDCCode', authenticate, wasteDC);       // GET    one (header + details)
router.post('/create', authenticate, wasteDC);                 // POST   create
router.put('/update/:wasteDCCode', authenticate, wasteDC);     // PUT    update
router.delete('/delete/:wasteDCCode', authenticate, wasteDC);  // DELETE delete

export default router;
