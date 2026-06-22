import express from 'express';
import { materialType } from '../controllers/materialType.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Material Type master paths (mounted at /api/v1/material-type).
router.get('/lists', authenticate, materialType);            // GET    list
router.get('/list/:code', authenticate, materialType);       // GET    one
router.post('/create', authenticate, materialType);          // POST   create
router.put('/update/:code', authenticate, materialType);     // PUT    update
router.delete('/delete/:code', authenticate, materialType);  // DELETE delete

export default router;
