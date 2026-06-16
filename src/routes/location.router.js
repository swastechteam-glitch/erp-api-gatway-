import express from 'express';
import { location } from '../controllers/location.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";


const router = express.Router();
// The exact "location/..." paths your React apiPath calls (mounted at /api/v1/location).
// Each path is forwarded to the core service by the controller.
router.all('/branch/list',authenticate, location);
router.all('/user-loginlogs',authenticate, location);

export default router;
