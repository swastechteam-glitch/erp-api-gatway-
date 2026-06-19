import express from 'express';
import { serviceActivity } from '../controllers/serviceActivity.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Service Activity master paths (mounted at /api/v1/service-activity).
router.get('/lists', authenticate, serviceActivity);
router.get('/items', authenticate, serviceActivity);
router.get('/uoms', authenticate, serviceActivity);
router.get('/list/:serviceActivityCode', authenticate, serviceActivity);
router.post('/create', authenticate, serviceActivity);
router.put('/update/:serviceActivityCode', authenticate, serviceActivity);
router.delete('/delete/:serviceActivityCode', authenticate, serviceActivity);

export default router;
