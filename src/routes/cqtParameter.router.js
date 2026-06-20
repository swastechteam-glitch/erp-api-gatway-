import express from 'express';
import { cqtParameter } from '../controllers/cqtParameter.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Cotton QC Test Parameter master paths (mounted at /api/v1/cqt-parameter).
router.get('/lists', authenticate, cqtParameter);                          // GET    list
router.get('/list/:cqtParameterCode', authenticate, cqtParameter);         // GET    one
router.post('/create', authenticate, cqtParameter);                        // POST   create
router.put('/update/:cqtParameterCode', authenticate, cqtParameter);       // PUT    update
router.delete('/delete/:cqtParameterCode', authenticate, cqtParameter);    // DELETE delete

export default router;
