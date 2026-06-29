import express from 'express';
import { countType } from '../controllers/countType.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Count Type master paths (mounted at /api/v1/count-type).
// Dropdown lookups first, then the generic CRUD paths.
router.get('/count-names', authenticate, countType);              // GET    Count Name dropdown
router.get('/lot-nos', authenticate, countType);                  // GET    Lot No dropdown
router.get('/tip-colours', authenticate, countType);              // GET    Tip Colour dropdown
router.get('/bag-colours', authenticate, countType);              // GET    Bag Colour dropdown
router.get('/bagno-groups', authenticate, countType);             // GET    BagNo Group dropdown

router.get('/lists', authenticate, countType);                    // GET    list
router.get('/list/:countTypeCode', authenticate, countType);      // GET    one
router.post('/create', authenticate, countType);                  // POST   create
router.put('/update/:countTypeCode', authenticate, countType);    // PUT    update
router.delete('/delete/:countTypeCode', authenticate, countType); // DELETE delete

export default router;
