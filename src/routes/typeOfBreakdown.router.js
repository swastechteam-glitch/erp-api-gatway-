import express from 'express';
import { typeOfBreakdown } from '../controllers/typeOfBreakdown.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Type Of Break Downs master paths (mounted at /api/v1/type-of-breakdown).
router.get('/lists', authenticate, typeOfBreakdown);
router.get('/list/:breakDownMasterCode', authenticate, typeOfBreakdown);
router.post('/create', authenticate, typeOfBreakdown);
router.put('/update/:breakDownMasterCode', authenticate, typeOfBreakdown);
router.delete('/delete/:breakDownMasterCode', authenticate, typeOfBreakdown);

export default router;
