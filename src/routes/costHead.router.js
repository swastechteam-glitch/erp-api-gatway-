import express from 'express';
import { costHead } from '../controllers/costHead.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Cost Head master paths (mounted at /api/v1/cost-head).
router.get('/lists', authenticate, costHead);                     // GET    list
router.get('/list/:costHeadCode', authenticate, costHead);        // GET    one
router.post('/create', authenticate, costHead);                   // POST   create
router.put('/update/:costHeadCode', authenticate, costHead);      // PUT    update
router.delete('/delete/:costHeadCode', authenticate, costHead);   // DELETE delete

export default router;
