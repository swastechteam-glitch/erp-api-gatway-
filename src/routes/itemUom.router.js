import express from 'express';
import { itemUom } from '../controllers/itemUom.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Item Uom master paths (mounted at /api/v1/item-uom).
router.get('/lists', authenticate, itemUom);                  // GET    list
router.get('/list/:itemUomCode', authenticate, itemUom);      // GET    one
router.post('/create', authenticate, itemUom);                // POST   create
router.put('/update/:itemUomCode', authenticate, itemUom);    // PUT    update
router.delete('/delete/:itemUomCode', authenticate, itemUom); // DELETE delete

export default router;
