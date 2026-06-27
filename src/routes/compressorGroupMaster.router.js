import express from 'express';
import { compressorGroupMaster } from '../controllers/compressorGroupMaster.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// compressor-group-master master paths (mounted at /api/v1/compressor-group-master).
router.get('/lists', authenticate, compressorGroupMaster);                       // GET    list
router.get('/list/:compressorGroupMasterCode', authenticate, compressorGroupMaster);              // GET    one
router.post('/create', authenticate, compressorGroupMaster);                     // POST   create
router.put('/update/:compressorGroupMasterCode', authenticate, compressorGroupMaster);            // PUT    update
router.delete('/delete/:compressorGroupMasterCode', authenticate, compressorGroupMaster);         // DELETE delete

export default router;
