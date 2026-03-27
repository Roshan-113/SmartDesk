const express = require('express');
const router = express.Router();
const {
  getAdminStats,
  getAnalyticsMetrics,
  getPriorityDistribution,
  getCategoryDistribution
} = require('../controllers/adminController');
const { protect, authorize } = require('../middleware/auth');

router.get('/stats', protect, authorize('admin'), getAdminStats);
router.get('/analytics/metrics', protect, authorize('admin'), getAnalyticsMetrics);
router.get('/analytics/priority-distribution', protect, authorize('admin'), getPriorityDistribution);
router.get('/analytics/category-distribution', protect, authorize('admin'), getCategoryDistribution);

module.exports = router;
