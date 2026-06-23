import express from 'express';
import { costingMaster } from '../controllers/costingMaster.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Costing Master paths (mounted at /api/v1/costing-master).
router.get('/lists', authenticate, costingMaster);                       // GET  list
router.get('/latest', authenticate, costingMaster);                      // GET  latest snapshot
router.post('/create', authenticate, costingMaster);                     // POST create
router.put('/update/:costingMasterCode', authenticate, costingMaster);   // PUT  update
router.get('/list/:costingMasterCode', authenticate, costingMaster);     // GET  one

export default router;
