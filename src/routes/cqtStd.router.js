import express from 'express';
import { cqtStd } from '../controllers/cqtStd.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Cotton Quality Test STD master paths (mounted at /api/v1/cqt-std).
router.get('/options', authenticate, cqtStd);                      // GET    CQT parameter lists
router.get('/lists', authenticate, cqtStd);                        // GET    list
router.get('/list/:cqtStdCode', authenticate, cqtStd);             // GET    one
router.post('/create', authenticate, cqtStd);                      // POST   create
router.put('/update/:cqtStdCode', authenticate, cqtStd);           // PUT    update
router.delete('/delete/:cqtStdCode', authenticate, cqtStd);        // DELETE delete

export default router;
