import express from 'express';
import { powerCategory } from '../controllers/powerCategory.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// power-category master paths (mounted at /api/v1/power-category).
router.get('/lists', authenticate, powerCategory);                       // GET    list
router.get('/list/:powerCategoryCode', authenticate, powerCategory);              // GET    one
router.post('/create', authenticate, powerCategory);                     // POST   create
router.put('/update/:powerCategoryCode', authenticate, powerCategory);            // PUT    update
router.delete('/delete/:powerCategoryCode', authenticate, powerCategory);         // DELETE delete

export default router;
