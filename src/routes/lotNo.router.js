import express from 'express';
import { lotNo } from '../controllers/lotNo.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Lot No master paths (mounted at /api/v1/lot-no).
// Dropdown lookup first, then the generic CRUD paths.
router.get('/mixing-counts', authenticate, lotNo);          // GET    Mixing Count dropdown
router.get('/lists', authenticate, lotNo);                  // GET    list
router.get('/list/:lotNoCode', authenticate, lotNo);        // GET    one
router.post('/create', authenticate, lotNo);                // POST   create
router.put('/update/:lotNoCode', authenticate, lotNo);      // PUT    update
router.delete('/delete/:lotNoCode', authenticate, lotNo);   // DELETE delete

export default router;
