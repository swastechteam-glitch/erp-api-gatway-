import express from 'express';
import { stores } from '../controllers/stores.controller.js';
import { authenticate } from "../middleware/authMiddleware.js";
const router = express.Router();
// The exact "stores/..." paths your React apiPath calls (mounted at /api/v1/stores).
// Each path is forwarded to the core service by the controller.
router.all('/bill-passing-approvals/list',authenticate, stores);
router.all('/goods-in-approvals/list',authenticate, stores);
router.all('/goods-out-2-approvals/list',authenticate, stores);
router.all('/goods-out-approvals/list',authenticate, stores);
router.all('/overview/bill-passing-overview/list/:id?',authenticate, stores);
router.all('/overview/goods-in-approval-overview/list/:id?',authenticate, stores);
router.all('/overview/goods-out-approval1-overview/list/:id?',authenticate, stores);
router.all('/overview/goods-out-approval2-overview/list/:id?',authenticate, stores);
router.all('/overview/purchase-advice-approve-overview/list/:id?',authenticate, stores);
router.all('/overview/purchase-order-approve1-overview/list/:id?',authenticate, stores);
router.all('/overview/purchase-order-approve2-overview/list/:id?',authenticate, stores);
router.all('/overview/purchase-order-approve3-overview/list/:id?',authenticate, stores);
router.all('/overview/store-bill-passing/approve',authenticate, stores);
router.all('/overview/store-goods-in/approve',authenticate, stores);
router.all('/overview/store-goods-out-one/approve',authenticate, stores);
router.all('/overview/store-goods-out-two/approve',authenticate, stores);
router.all('/overview/store-purchase-advice-details/approve',authenticate, stores);
router.all('/overview/store-purchase-advice/approve',authenticate, stores);
router.all('/overview/store-purchase-order-gm/approve',authenticate, stores);
router.all('/overview/store-purchase-order-md/approve',authenticate, stores);
router.all('/overview/store-purchase-order/approve',authenticate, stores);
router.all('/purchase-advice-approvals/list',authenticate, stores);
router.all('/purchase-order-approvals/list',authenticate, stores);
router.all('/purchase-order-approvals/filtered',authenticate, stores);
router.all('/purchase-order-gm-approvals/list',authenticate, stores);
router.all('/purchase-order-gm-approvals/filtered',authenticate, stores);
router.all('/purchase-order-md-approvals/list',authenticate, stores);
router.all('/purchase-order-md-approvals/filtered',authenticate, stores);

export default router;
