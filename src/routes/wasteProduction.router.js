import express from 'express';
import { wasteProduction } from '../controllers/wasteProduction.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Waste Production paths (mounted at /api/v1/waste-production).
router.get('/options', authenticate, wasteProduction);                        // GET    dropdown lookups
router.get('/next-bale-no', authenticate, wasteProduction);                   // GET    next bag no
router.get('/lists', authenticate, wasteProduction);                          // GET    filtered list
router.get('/list/:wasteBaleCode', authenticate, wasteProduction);           // GET    one
router.post('/create', authenticate, wasteProduction);                        // POST   create
router.put('/update/:wasteBaleCode', authenticate, wasteProduction);         // PUT    update
router.delete('/delete/:wasteBaleCode', authenticate, wasteProduction);      // DELETE delete

export default router;
