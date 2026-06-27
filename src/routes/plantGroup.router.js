import express from 'express';
import { plantGroup } from '../controllers/plantGroup.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// plant-group master paths (mounted at /api/v1/plant-group).
router.get('/lists', authenticate, plantGroup);                       // GET    list
router.get('/list/:plantGroupCode', authenticate, plantGroup);              // GET    one
router.post('/create', authenticate, plantGroup);                     // POST   create
router.put('/update/:plantGroupCode', authenticate, plantGroup);            // PUT    update
router.delete('/delete/:plantGroupCode', authenticate, plantGroup);         // DELETE delete

export default router;
