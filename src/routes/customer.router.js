import express from 'express';
import { customer } from '../controllers/customer.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Customer master paths (mounted at /api/v1/customer).
router.get('/options', authenticate, customer);                 // GET    dropdown lookups
router.get('/lists', authenticate, customer);                   // GET    list
router.get('/list/:customerCode', authenticate, customer);      // GET    one
router.post('/create', authenticate, customer);                 // POST   create
router.put('/update/:customerCode', authenticate, customer);    // PUT    update
router.delete('/delete/:customerCode', authenticate, customer); // DELETE delete

export default router;
