import express from 'express';
import { graph } from '../controllers/graph.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// The exact "graph/..." paths your React apiPath calls (mounted at /api/v1/graph).
// Each path is forwarded to the core service by the controller.
router.all('/cotton/po-pendings',authenticate, graph);
router.all('/cotton/stock-bales-wise',authenticate, graph);
router.all('/production/spinning-Production',authenticate, graph);

export default router;
