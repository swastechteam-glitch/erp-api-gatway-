import express from 'express';
import { company } from '../controllers/company.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// The exact "company/..." paths your React apiPath calls (mounted at /api/v1/company).
// Each path is forwarded to the core service by the controller.
router.get('/', company); // public — login-page company dropdown

// Company master (frmCompanyDetails) — authenticated.
router.get('/lists', authenticate, company);                  // GET    list
router.get('/list/:companyCode', authenticate, company);      // GET    one

export default router;
