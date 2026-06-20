import express from 'express';
import { transporter } from '../controllers/transporter.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Transporter master paths (mounted at /api/v1/transporter).
router.get('/options', authenticate, transporter);                    // GET    Bank lookup
router.get('/lists', authenticate, transporter);                      // GET    list
router.get('/list/:transporterCode', authenticate, transporter);      // GET    one
router.post('/create', authenticate, transporter);                    // POST   create
router.put('/update/:transporterCode', authenticate, transporter);    // PUT    update
router.delete('/delete/:transporterCode', authenticate, transporter); // DELETE delete

export default router;
