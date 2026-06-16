import express from 'express';
import { godown } from '../controllers/godown.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Godown master paths (mounted at /api/v1/godown).
router.get('/lists', authenticate, godown);                  // GET    list
router.get('/list/:godownCode', authenticate, godown);       // GET    one
router.post('/create', authenticate, godown);                // POST   create
router.put('/update/:godownCode', authenticate, godown);     // PUT    update
router.delete('/delete/:godownCode', authenticate, godown);  // DELETE delete

export default router;
