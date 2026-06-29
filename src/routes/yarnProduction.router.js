import express from 'express';
import { yarnProduction } from '../controllers/yarnProduction.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Yarn Production Add paths (mounted at /api/v1/yarn-production).
router.get('/options', authenticate, yarnProduction);          // header dropdowns
router.get('/employees', authenticate, yarnProduction);        // supervisor/employee by date
router.get('/next-bag-no', authenticate, yarnProduction);      // auto bag number
router.get('/lists', authenticate, yarnProduction);            // saved production rows (grid)
router.post('/create', authenticate, yarnProduction);          // insert 1..N bags
router.put('/update/:productionNo', authenticate, yarnProduction); // edit one bag

export default router;
