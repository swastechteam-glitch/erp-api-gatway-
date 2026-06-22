import express from 'express';
import { cottonPurchaseOrder } from '../controllers/cottonPurchaseOrder.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
// Cotton Purchase Order paths (mounted at /api/v1/cotton-purchase-order).
router.get('/options', authenticate, cottonPurchaseOrder);                       // lookups
router.get('/stations', authenticate, cottonPurchaseOrder);                      // ?stateCode= dependent list
router.get('/next-no', authenticate, cottonPurchaseOrder);                       // next PO number
router.get('/quality-std/:code/parameters', authenticate, cottonPurchaseOrder); // CQT STD grid
router.get('/lists', authenticate, cottonPurchaseOrder);                         // list
router.get('/list/:code', authenticate, cottonPurchaseOrder);                    // one (header + details)
router.post('/create', authenticate, cottonPurchaseOrder);                       // create
router.put('/update/:code', authenticate, cottonPurchaseOrder);                  // update
router.delete('/delete/:code', authenticate, cottonPurchaseOrder);              // delete

export default router;
