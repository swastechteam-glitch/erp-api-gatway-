import express from 'express';
import { usableWasteProduction } from '../controllers/usableWasteProduction.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Usable Waste Production paths (mounted at /api/v1/usable-waste-production).
router.get('/options', authenticate, usableWasteProduction);                          // GET    dropdown lookups
router.get('/next-bale-no', authenticate, usableWasteProduction);                     // GET    next bag no
router.get('/lists', authenticate, usableWasteProduction);                            // GET    filtered list
router.get('/list/:usableWasteBaleCode', authenticate, usableWasteProduction);        // GET    one
router.post('/create', authenticate, usableWasteProduction);                          // POST   create
router.put('/update/:usableWasteBaleCode', authenticate, usableWasteProduction);      // PUT    update
router.delete('/delete/:usableWasteBaleCode', authenticate, usableWasteProduction);   // DELETE delete

export default router;
