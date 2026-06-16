import express from 'express';
import { aiChat } from '../controllers/aiChat.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// The exact "ai-chat/..." paths your React apiPath calls (mounted at /api/v1/ai-chat).
// Each path is forwarded to the ai service by the controller.
router.get('/prompt', authenticate, aiChat);

export default router;
