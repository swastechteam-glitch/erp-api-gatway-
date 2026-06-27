import express from 'express';
import { autoconerCountWiseProduction } from '../controllers/autoconerCountWiseProduction.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// AutoConer Count Wise Production paths (mounted at /api/v1/autoconer-count-wise-production).
router.get('/options', authenticate, autoconerCountWiseProduction);
router.get('/next-no', authenticate, autoconerCountWiseProduction);
router.get('/load', authenticate, autoconerCountWiseProduction);
router.get('/lists', authenticate, autoconerCountWiseProduction);
router.get('/list/:code', authenticate, autoconerCountWiseProduction);
router.post('/create', authenticate, autoconerCountWiseProduction);
router.put('/update/:code', authenticate, autoconerCountWiseProduction);
router.delete('/delete/:code', authenticate, autoconerCountWiseProduction);

export default router;
