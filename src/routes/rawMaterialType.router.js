import express from 'express';
import { rawMaterialType } from '../controllers/rawMaterialType.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Raw Material Type master paths (mounted at /api/v1/raw-material-type).
router.get('/lists', authenticate, rawMaterialType);                              // GET    list
router.get('/list/:rawMaterialTypeCode', authenticate, rawMaterialType);          // GET    one
router.post('/create', authenticate, rawMaterialType);                            // POST   create
router.put('/update/:rawMaterialTypeCode', authenticate, rawMaterialType);        // PUT    update
router.delete('/delete/:rawMaterialTypeCode', authenticate, rawMaterialType);     // DELETE delete

export default router;
