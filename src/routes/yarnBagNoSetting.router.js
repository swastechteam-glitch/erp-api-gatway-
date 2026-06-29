import express from 'express';
import { yarnBagNoSetting } from '../controllers/yarnBagNoSetting.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Yarn Bag No Setting master paths (mounted at /api/v1/yarn-bag-no-setting).
router.get('/groups', authenticate, yarnBagNoSetting);                         // GET    group dropdown
router.get('/lists', authenticate, yarnBagNoSetting);                          // GET    list
router.get('/list/:yarnBagNoSettingCode', authenticate, yarnBagNoSetting);     // GET    one
router.post('/create', authenticate, yarnBagNoSetting);                        // POST   create
router.put('/update/:yarnBagNoSettingCode', authenticate, yarnBagNoSetting);   // PUT    update
router.delete('/delete/:yarnBagNoSettingCode', authenticate, yarnBagNoSetting);// DELETE delete

export default router;
