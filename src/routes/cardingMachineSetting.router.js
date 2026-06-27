import express from 'express';
import { cardingMachineSetting } from '../controllers/cardingMachineSetting.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Carding Machine Setting master paths (mounted at /api/v1/carding-machine-setting).
router.get('/options', authenticate, cardingMachineSetting);                            // GET    lookups
router.get('/lists', authenticate, cardingMachineSetting);                              // GET    list
router.get('/list/:crdMachineSettingCode', authenticate, cardingMachineSetting);       // GET    one
router.post('/create', authenticate, cardingMachineSetting);                           // POST   create
router.put('/update/:crdMachineSettingCode', authenticate, cardingMachineSetting);     // PUT    update
router.delete('/delete/:crdMachineSettingCode', authenticate, cardingMachineSetting);  // DELETE delete

export default router;
