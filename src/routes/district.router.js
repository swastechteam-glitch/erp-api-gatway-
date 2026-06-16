import express from 'express';
import { district } from '../controllers/district.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// District master paths (mounted at /api/v1/district).
router.get('/lists', authenticate, district);                    // GET    list
router.get('/states', authenticate, district);                   // GET    state dropdown
router.get('/list/:districtCode', authenticate, district);       // GET    one
router.post('/create', authenticate, district);                  // POST   create
router.put('/update/:districtCode', authenticate, district);     // PUT    update
router.delete('/delete/:districtCode', authenticate, district);  // DELETE delete

export default router;
