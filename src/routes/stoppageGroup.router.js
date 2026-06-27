import express from 'express';
import { stoppageGroup } from '../controllers/stoppageGroup.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Stoppage Group master paths (mounted at /api/v1/stoppage-group).
router.get('/lists', authenticate, stoppageGroup);                          // GET    list
router.get('/list/:stoppageGroupCode', authenticate, stoppageGroup);       // GET    one
router.post('/create', authenticate, stoppageGroup);                       // POST   create
router.put('/update/:stoppageGroupCode', authenticate, stoppageGroup);     // PUT    update
router.delete('/delete/:stoppageGroupCode', authenticate, stoppageGroup);  // DELETE delete

export default router;
