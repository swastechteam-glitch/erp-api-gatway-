import express from 'express';
import { payPeriod } from '../controllers/payPeriod.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Pay Period master paths (mounted at /api/v1/pay-period). Forwarded to core.
router.get('/options', authenticate, payPeriod);              // GET    pay types
router.get('/from-date/:payType', authenticate, payPeriod);   // GET    last "to" date for a pay type
router.get('/lists', authenticate, payPeriod);                // GET    list
router.get('/record/:code', authenticate, payPeriod);         // GET    one
router.post('/create', authenticate, payPeriod);              // POST   create
router.put('/update/:code', authenticate, payPeriod);         // PUT    update
router.delete('/delete/:code', authenticate, payPeriod);      // DELETE delete

export default router;
