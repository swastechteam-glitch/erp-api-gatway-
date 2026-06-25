import express from 'express';
import { countGroup } from '../controllers/countGroup.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Count Group master paths (mounted at /api/v1/count-group).
router.get('/lists', authenticate, countGroup);                       // GET    list
router.get('/list/:countGroupCode', authenticate, countGroup);        // GET    one
router.post('/create', authenticate, countGroup);                     // POST   create
router.put('/update/:countGroupCode', authenticate, countGroup);      // PUT    update
router.delete('/delete/:countGroupCode', authenticate, countGroup);   // DELETE delete

export default router;
