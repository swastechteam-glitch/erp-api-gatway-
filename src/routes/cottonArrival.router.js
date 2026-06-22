import express from 'express';
import { cottonArrival } from '../controllers/cottonArrival.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Cotton Arrival / GRN paths (mounted at /api/v1/cotton-arrival).
router.get('/options', authenticate, cottonArrival);
router.get('/cpo-pending', authenticate, cottonArrival);
router.get('/cpo/:code', authenticate, cottonArrival);
router.get('/gate-entries', authenticate, cottonArrival);
router.get('/weigh-bridges', authenticate, cottonArrival);
router.get('/mill-lot-no', authenticate, cottonArrival);
router.get('/lists', authenticate, cottonArrival);
router.get('/list/:code', authenticate, cottonArrival);
router.post('/create', authenticate, cottonArrival);
router.put('/update/:code', authenticate, cottonArrival);
router.delete('/delete/:code', authenticate, cottonArrival);

export default router;
