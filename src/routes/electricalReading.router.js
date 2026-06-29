import express from 'express';
import { electricalReading } from '../controllers/electricalReading.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Electrical Reading Entry (frmElectricalReadingEntry) — mounted at /api/v1/electrical-reading.
router.get('/options', authenticate, electricalReading);

router.get('/dept/preload', authenticate, electricalReading);
router.get('/dept/meta', authenticate, electricalReading);
router.get('/dept/list', authenticate, electricalReading);
router.get('/dept/:code', authenticate, electricalReading);
router.post('/dept/save', authenticate, electricalReading);
router.delete('/dept/:code', authenticate, electricalReading);

router.get('/slot/preload', authenticate, electricalReading);
router.get('/slot/meta', authenticate, electricalReading);
router.get('/slot/list', authenticate, electricalReading);
router.get('/slot/:code', authenticate, electricalReading);
router.post('/slot/save', authenticate, electricalReading);
router.delete('/slot/:code', authenticate, electricalReading);

router.get('/daywise/list', authenticate, electricalReading);
router.get('/daywise/:code', authenticate, electricalReading);
router.post('/daywise/save', authenticate, electricalReading);
router.delete('/daywise/:code', authenticate, electricalReading);

router.get('/solar/preload', authenticate, electricalReading);
router.get('/solar/list', authenticate, electricalReading);
router.get('/solar/:code', authenticate, electricalReading);
router.post('/solar/save', authenticate, electricalReading);
router.delete('/solar/:code', authenticate, electricalReading);

router.get('/genset/list', authenticate, electricalReading);
router.get('/genset/:code', authenticate, electricalReading);
router.post('/genset/save', authenticate, electricalReading);
router.delete('/genset/:code', authenticate, electricalReading);

router.get('/compressor/preload', authenticate, electricalReading);
router.get('/compressor/list', authenticate, electricalReading);
router.get('/compressor/:code', authenticate, electricalReading);
router.post('/compressor/save', authenticate, electricalReading);
router.delete('/compressor/:code', authenticate, electricalReading);

export default router;
