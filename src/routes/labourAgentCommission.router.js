import express from 'express';
import { labourAgentCommission } from '../controllers/labourAgentCommission.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Labour Agent Commission paths (mounted at /api/v1/labour-agent-commission). Forwarded to core.
router.get('/options', authenticate, labourAgentCommission);        // GET    pay types + agents + no
router.get('/pay-periods', authenticate, labourAgentCommission);    // GET    pay periods for agent+type
router.get('/pendings', authenticate, labourAgentCommission);       // GET    pending employees
router.get('/list', authenticate, labourAgentCommission);           // GET    commissions grid
router.post('/save', authenticate, labourAgentCommission);          // POST   save (add / edit)
router.delete('/:lacCode', authenticate, labourAgentCommission);    // DELETE remove one commission

export default router;
