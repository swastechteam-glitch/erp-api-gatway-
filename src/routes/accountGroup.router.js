import express from 'express';
import { accountGroup } from '../controllers/accountGroup.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Account Group master paths (mounted at /api/v1/account-group).
router.get('/options', authenticate, accountGroup);          // GET    Parent Group lookup
router.get('/lists', authenticate, accountGroup);            // GET    list
router.get('/list/:code', authenticate, accountGroup);       // GET    one
router.post('/create', authenticate, accountGroup);          // POST   create
router.put('/update/:code', authenticate, accountGroup);     // PUT    update
router.delete('/delete/:code', authenticate, accountGroup);  // DELETE delete

export default router;
