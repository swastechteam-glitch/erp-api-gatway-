import express from 'express';
import { machineMake } from '../controllers/machineMake.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Machine Make master paths (mounted at /api/v1/machine-make).
router.get('/lists', authenticate, machineMake);                          // GET    list
router.get('/list/:machineMakeCode', authenticate, machineMake);         // GET    one
router.post('/create', authenticate, machineMake);                       // POST   create
router.put('/update/:machineMakeCode', authenticate, machineMake);       // PUT    update
router.delete('/delete/:machineMakeCode', authenticate, machineMake);    // DELETE delete

export default router;
