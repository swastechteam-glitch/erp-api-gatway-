import express from 'express';
import { yarnConePacking } from '../controllers/yarnConePacking.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Yarn Cone Packing paths (mounted at /api/v1/yarn-cone-packing).
router.get('/counts', authenticate, yarnConePacking);       // fixing counts for date
router.get('/next-bag-no', authenticate, yarnConePacking);  // auto bag number
router.get('/lists', authenticate, yarnConePacking);        // last entries + count-wise + total
router.post('/create', authenticate, yarnConePacking);      // save one bag
router.put('/update/:productionNo', authenticate, yarnConePacking); // edit one saved bag
router.delete('/:productionNo', authenticate, yarnConePacking);     // delete one saved bag

export default router;
