import express from 'express';
import { usableWasteIssue } from '../controllers/usableWasteIssue.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Usable Waste Issue paths (mounted at /api/v1/usable-waste-issue).
router.get('/options', authenticate, usableWasteIssue);                  // GET    dropdown lookups
router.get('/next-issue-no', authenticate, usableWasteIssue);           // GET    next issue no
router.get('/available-bales', authenticate, usableWasteIssue);         // GET    stock bales not yet issued
router.get('/lists', authenticate, usableWasteIssue);                   // GET    filtered list
router.get('/list/:code', authenticate, usableWasteIssue);              // GET    one (header + details)
router.post('/create', authenticate, usableWasteIssue);                 // POST   create
router.put('/update/:code', authenticate, usableWasteIssue);            // PUT    update
router.delete('/delete/:code', authenticate, usableWasteIssue);         // DELETE delete

export default router;
