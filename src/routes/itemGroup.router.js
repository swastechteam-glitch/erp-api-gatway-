import express from 'express';
import { itemGroup } from '../controllers/itemGroup.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Item Group master paths (mounted at /api/v1/item-group).
router.get('/lists', authenticate, itemGroup);                    // GET    list
router.get('/list/:itemGroupCode', authenticate, itemGroup);      // GET    one
router.post('/create', authenticate, itemGroup);                  // POST   create
router.put('/update/:itemGroupCode', authenticate, itemGroup);    // PUT    update
router.delete('/delete/:itemGroupCode', authenticate, itemGroup); // DELETE delete

export default router;
