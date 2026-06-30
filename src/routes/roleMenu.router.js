import express from 'express';
import { roleAccessForward } from '../controllers/roleMenu.controller.js';

const router = express.Router();

// Forward EVERY method + sub-path under /api/v1/role-access to the core service.
// Covers: GET my-menus, GET/POST/PUT/DELETE roles, GET menus,
// GET/POST role-menus, GET users, POST user-role, GET/POST user-menus.
// Core does the auth + super-admin gating; the gateway only relays.
router.use('/', roleAccessForward);

export default router;
