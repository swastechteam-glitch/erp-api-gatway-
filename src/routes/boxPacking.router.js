import express from 'express';
import { boxPacking } from '../controllers/boxPacking.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Box Packing master paths (mounted at /api/v1/box-packing).
router.get('/lists', authenticate, boxPacking);                      // GET    list
router.get('/list/:boxPackingCode', authenticate, boxPacking);       // GET    one
router.post('/create', authenticate, boxPacking);                    // POST   create
router.put('/update/:boxPackingCode', authenticate, boxPacking);     // PUT    update
router.delete('/delete/:boxPackingCode', authenticate, boxPacking);  // DELETE delete

export default router;
