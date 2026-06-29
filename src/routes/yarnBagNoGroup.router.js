import express from 'express';
import { yarnBagNoGroup } from '../controllers/yarnBagNoGroup.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Yarn Bag No Group master paths (mounted at /api/v1/yarn-bag-no-group).
router.get('/lists', authenticate, yarnBagNoGroup);                          // GET    list
router.get('/list/:yarnBagNoGroupCode', authenticate, yarnBagNoGroup);       // GET    one
router.post('/create', authenticate, yarnBagNoGroup);                        // POST   create
router.put('/update/:yarnBagNoGroupCode', authenticate, yarnBagNoGroup);     // PUT    update
router.delete('/delete/:yarnBagNoGroupCode', authenticate, yarnBagNoGroup);  // DELETE delete

export default router;
