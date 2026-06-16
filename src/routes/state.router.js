import express from 'express';
import { state } from '../controllers/state.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// State master paths (mounted at /api/v1/state).
router.get('/lists', authenticate, state);                  // GET    list
router.get('/list/:stateCode', authenticate, state);        // GET    one
router.post('/create', authenticate, state);                // POST   create
router.put('/update/:stateCode', authenticate, state);      // PUT    update
router.delete('/delete/:stateCode', authenticate, state);   // DELETE delete

export default router;
