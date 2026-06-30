import express from 'express';
import { companyVisitors } from '../controllers/companyVisitors.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Company Visitors — Pass Entry (mounted at /api/v1/company-visitors).
router.get('/options', authenticate, companyVisitors);
router.get('/next-no', authenticate, companyVisitors);
router.get('/pending', authenticate, companyVisitors);
router.get('/lists', authenticate, companyVisitors);
router.get('/employees', authenticate, companyVisitors);
router.get('/employee-by-id/:empId', authenticate, companyVisitors);
router.get('/employee-photo/:employeeCode', authenticate, companyVisitors);
router.get('/record/:code', authenticate, companyVisitors);
router.post('/save', authenticate, companyVisitors);

export default router;
