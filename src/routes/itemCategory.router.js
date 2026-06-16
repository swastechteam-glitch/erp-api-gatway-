import express from 'express';
import { itemCategory } from '../controllers/itemCategory.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Item Category master paths (mounted at /api/v1/item-category).
router.get('/lists', authenticate, itemCategory);                       // GET    list
router.get('/item-groups', authenticate, itemCategory);                 // GET    item-group dropdown
router.get('/list/:itemCategoryCode', authenticate, itemCategory);      // GET    one
router.post('/create', authenticate, itemCategory);                     // POST   create
router.put('/update/:itemCategoryCode', authenticate, itemCategory);    // PUT    update
router.delete('/delete/:itemCategoryCode', authenticate, itemCategory); // DELETE delete

export default router;
