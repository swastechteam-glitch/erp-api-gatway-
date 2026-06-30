import express from 'express';
import { empCategory } from '../controllers/empCategory.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Employee Category master paths (mounted at /api/v1/emp-category). Forwarded to core.
router.get('/lists', authenticate, empCategory);                    // GET    list
router.get('/list/:empCategoryCode', authenticate, empCategory);    // GET    one
router.post('/create', authenticate, empCategory);                  // POST   create
router.put('/update/:empCategoryCode', authenticate, empCategory);  // PUT    update
router.delete('/delete/:empCategoryCode', authenticate, empCategory); // DELETE delete

export default router;
