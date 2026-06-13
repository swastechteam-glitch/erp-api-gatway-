import express from 'express';
import { stores } from '../controllers/stores.controller.js';

const router = express.Router();
// The exact "stores/..." paths your React apiPath calls (mounted at /api/v1/stores).
// Each path is forwarded to the core service by the controller.
router.all('/bill-passing-approvals/list', stores);
router.all('/goods-in-approvals/list', stores);
router.all('/goods-out-2-approvals/list', stores);
router.all('/goods-out-approvals/list', stores);
router.all('/overview/bill-passing-overview/list', stores);
router.all('/overview/goods-in-approval-overview/list', stores);
router.all('/overview/goods-out-approval1-overview/list', stores);
router.all('/overview/goods-out-approval2-overview/list', stores);
router.all('/overview/purchase-advice-approve-overview/list', stores);
router.all('/overview/purchase-order-approve1-overview/list', stores);
router.all('/overview/purchase-order-approve2-overview/list', stores);
router.all('/overview/purchase-order-approve3-overview/list', stores);
router.all('/overview/store-bill-passing/approve', stores);
router.all('/overview/store-goods-in/approve', stores);
router.all('/overview/store-goods-out-one/approve', stores);
router.all('/overview/store-goods-out-two/approve', stores);
router.all('/overview/store-purchase-advice-details/approve', stores);
router.all('/overview/store-purchase-advice/approve', stores);
router.all('/overview/store-purchase-order-gm/approve', stores);
router.all('/overview/store-purchase-order-md/approve', stores);
router.all('/overview/store-purchase-order/approve', stores);
router.all('/purchase-advice-approvals/list', stores);
router.all('/purchase-order-approvals/list', stores);
router.all('/purchase-order-gm-approvals/list', stores);
router.all('/purchase-order-md-approvals/list', stores);

export default router;
