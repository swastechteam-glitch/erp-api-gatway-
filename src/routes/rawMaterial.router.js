import express from 'express';
import { rawMaterial } from '../controllers/rawMaterial.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Raw Material master paths (mounted at /api/v1/raw-material).
router.get('/options', authenticate, rawMaterial);                        // GET    Raw Material Type lookup
router.get('/lists', authenticate, rawMaterial);                          // GET    list
router.get('/list/:rawMaterialCode', authenticate, rawMaterial);          // GET    one
router.post('/create', authenticate, rawMaterial);                        // POST   create
router.put('/update/:rawMaterialCode', authenticate, rawMaterial);        // PUT    update
router.delete('/delete/:rawMaterialCode', authenticate, rawMaterial);     // DELETE delete

export default router;
