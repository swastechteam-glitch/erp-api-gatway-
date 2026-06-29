import express from 'express';
import { otherCharges } from '../controllers/otherCharges.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Other Charges master paths (mounted at /api/v1/other-charges).
router.get('/lists', authenticate, otherCharges);                       // GET    list
router.get('/list/:otherChargesCode', authenticate, otherCharges);      // GET    one
router.post('/create', authenticate, otherCharges);                     // POST   create
router.put('/update/:otherChargesCode', authenticate, otherCharges);    // PUT    update
router.delete('/delete/:otherChargesCode', authenticate, otherCharges); // DELETE delete

export default router;
