import express from 'express';
import { room } from '../controllers/room.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Room master paths (mounted at /api/v1/room). Forwarded to core.
router.get('/options', authenticate, room);              // GET    hostel types
router.get('/lists', authenticate, room);                // GET    list
router.get('/list/:roomCode', authenticate, room);       // GET    one
router.post('/create', authenticate, room);              // POST   create
router.put('/update/:roomCode', authenticate, room);     // PUT    update
router.delete('/delete/:roomCode', authenticate, room);  // DELETE delete

export default router;
