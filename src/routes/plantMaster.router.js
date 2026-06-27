import express from 'express';
import { plantMaster } from '../controllers/plantMaster.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// plant-master master paths (mounted at /api/v1/plant-master).
router.get('/lists', authenticate, plantMaster);                       // GET    list
router.get('/list/:plantCode', authenticate, plantMaster);              // GET    one
router.post('/create', authenticate, plantMaster);                     // POST   create
router.put('/update/:plantCode', authenticate, plantMaster);            // PUT    update
router.delete('/delete/:plantCode', authenticate, plantMaster);         // DELETE delete

export default router;
