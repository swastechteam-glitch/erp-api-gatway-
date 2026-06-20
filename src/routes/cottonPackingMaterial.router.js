import express from 'express';
import { cottonPackingMaterial } from '../controllers/cottonPackingMaterial.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Cotton Packing Material master paths (mounted at /api/v1/cotton-packing-material).
router.get('/lists', authenticate, cottonPackingMaterial);                                  // GET    list
router.get('/list/:cottonPackingMaterialCode', authenticate, cottonPackingMaterial);        // GET    one
router.post('/create', authenticate, cottonPackingMaterial);                                // POST   create
router.put('/update/:cottonPackingMaterialCode', authenticate, cottonPackingMaterial);      // PUT    update
router.delete('/delete/:cottonPackingMaterialCode', authenticate, cottonPackingMaterial);   // DELETE delete

export default router;
