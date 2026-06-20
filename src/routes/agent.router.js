import express from 'express';
import { agent } from '../controllers/agent.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Agent master paths (mounted at /api/v1/agent).
router.get('/options', authenticate, agent);                  // GET    State + Bank lookups
router.get('/lists', authenticate, agent);                    // GET    list
router.get('/list/:agentCode', authenticate, agent);          // GET    one
router.post('/create', authenticate, agent);                  // POST   create
router.put('/update/:agentCode', authenticate, agent);        // PUT    update
router.delete('/delete/:agentCode', authenticate, agent);     // DELETE delete

export default router;
