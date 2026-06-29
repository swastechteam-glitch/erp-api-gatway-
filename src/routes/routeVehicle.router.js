import express from 'express';
import { routeVehicle } from '../controllers/routeVehicle.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Route Vehicle master paths (mounted at /api/v1/route-vehicle). Forwarded to core.
router.get('/options', authenticate, routeVehicle);          // GET    routes dropdown
router.get('/lists', authenticate, routeVehicle);            // GET    list
router.get('/list/:code', authenticate, routeVehicle);       // GET    one
router.post('/create', authenticate, routeVehicle);          // POST   create
router.put('/update/:code', authenticate, routeVehicle);     // PUT    update
router.delete('/delete/:code', authenticate, routeVehicle);  // DELETE delete

export default router;
