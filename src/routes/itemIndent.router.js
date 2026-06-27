import express from 'express';
import { itemIndent } from '../controllers/itemIndent.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Item Issue Indent paths (mounted at /api/v1/item-indent).
router.get('/options', authenticate, itemIndent);
router.get('/items', authenticate, itemIndent);
router.get('/machines', authenticate, itemIndent);
router.get('/next-no', authenticate, itemIndent);
router.get('/lists', authenticate, itemIndent);
router.get('/list/:code', authenticate, itemIndent);
router.post('/create', authenticate, itemIndent);
router.put('/update/:code', authenticate, itemIndent);
router.delete('/delete/:code', authenticate, itemIndent);

export default router;
