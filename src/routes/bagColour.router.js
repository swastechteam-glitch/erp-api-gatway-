import express from 'express';
import { bagColour } from '../controllers/bagColour.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Bag Colour master paths (mounted at /api/v1/bag-colour).
router.get('/lists', authenticate, bagColour);                       // GET    list
router.get('/list/:bagColourCode', authenticate, bagColour);         // GET    one
router.post('/create', authenticate, bagColour);                     // POST   create
router.put('/update/:bagColourCode', authenticate, bagColour);       // PUT    update
router.delete('/delete/:bagColourCode', authenticate, bagColour);    // DELETE delete

export default router;
