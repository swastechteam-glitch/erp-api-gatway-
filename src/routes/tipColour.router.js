import express from 'express';
import { tipColour } from '../controllers/tipColour.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Tip Colour master paths (mounted at /api/v1/tip-colour).
router.get('/lists', authenticate, tipColour);                       // GET    list
router.get('/list/:tipColourCode', authenticate, tipColour);         // GET    one
router.post('/create', authenticate, tipColour);                     // POST   create
router.put('/update/:tipColourCode', authenticate, tipColour);       // PUT    update
router.delete('/delete/:tipColourCode', authenticate, tipColour);    // DELETE delete

export default router;
