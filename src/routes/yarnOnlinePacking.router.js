import express from 'express';
import { yarnOnlinePacking } from '../controllers/yarnOnlinePacking.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// On Line Packing paths (mounted at /api/v1/yarn-online-packing).
router.get('/counts', authenticate, yarnOnlinePacking);       // fixing counts for date
router.get('/next-bag-no', authenticate, yarnOnlinePacking);  // auto bag number
router.get('/lists', authenticate, yarnOnlinePacking);        // last entries + count-wise + total
router.post('/create', authenticate, yarnOnlinePacking);      // save one bag
router.put('/update/:productionNo', authenticate, yarnOnlinePacking); // edit one saved bag
router.delete('/:productionNo', authenticate, yarnOnlinePacking);     // delete one saved bag

export default router;
