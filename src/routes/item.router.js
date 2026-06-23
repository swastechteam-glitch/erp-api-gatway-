import express from 'express';
import { item } from '../controllers/item.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Item master paths (mounted at /api/v1/item).
router.get('/lists', authenticate, item);                              // GET    list

// Item Name typeahead (duplicate lookup) — forwards /search?name= to core
router.get('/search', authenticate, item);                             // GET    search

// Auto-generated Item ID from the selected department
router.get('/next-item-id/:departmentCode', authenticate, item);       // GET    next item id

// Dropdown sources
router.get('/item-groups', authenticate, item);                       // GET
router.get('/item-categories/:itemGroupCode', authenticate, item);    // GET (by group)
router.get('/item-usage-types', authenticate, item);                  // GET
router.get('/item-uoms', authenticate, item);                         // GET
router.get('/taxes', authenticate, item);                             // GET
router.get('/departments', authenticate, item);                       // GET

router.get('/list/:itemCode', authenticate, item);                    // GET    one
router.post('/create', authenticate, item);                           // POST   create
router.put('/update/:itemCode', authenticate, item);                  // PUT    update
router.delete('/delete/:itemCode', authenticate, item);               // DELETE delete

export default router;
