import express from 'express';
import { route } from '../controllers/route.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Route master paths (mounted at /api/v1/route). Forwarded to core.
router.get('/lists', authenticate, route);             // GET    list
router.get('/list/:code', authenticate, route);        // GET    one
router.post('/create', authenticate, route);           // POST   create
router.put('/update/:code', authenticate, route);      // PUT    update
router.delete('/delete/:code', authenticate, route);   // DELETE delete

export default router;
