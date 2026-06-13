import express from 'express';
import { graph } from '../controllers/graph.controller.js';

const router = express.Router();
// The exact "graph/..." paths your React apiPath calls (mounted at /api/v1/graph).
// Each path is forwarded to the core service by the controller.
router.all('/cotton/po-pendings', graph);
router.all('/cotton/stock-bales-wise', graph);
router.all('/production/spinning-Production', graph);

export default router;
