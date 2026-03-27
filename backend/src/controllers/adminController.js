const pool = require('../config/database');

// @desc    Get admin dashboard statistics
// @route   GET /api/admin/stats
// @access  Private (Admin)
exports.getAdminStats = async (req, res) => {
  try {
    // Get total tickets
    const ticketsResult = await pool.query('SELECT COUNT(*) as total FROM tickets');
    
    // Get active users (users who created tickets in last 30 days)
    const activeUsersResult = await pool.query(`
      SELECT COUNT(DISTINCT user_id) as active
      FROM tickets
      WHERE created_at >= NOW() - INTERVAL '30 days'
    `);

    // Get resolution rate
    const resolutionResult = await pool.query(`
      SELECT 
        COUNT(*) FILTER (WHERE status = 'resolved') as resolved,
        COUNT(*) as total
      FROM tickets
    `);

    const resolutionRate = resolutionResult.rows[0].total > 0
      ? Math.round((resolutionResult.rows[0].resolved / resolutionResult.rows[0].total) * 100)
      : 0;

    // Get ticket distribution
    const distributionResult = await pool.query(`
      SELECT 
        COUNT(*) FILTER (WHERE status = 'open') as open,
        COUNT(*) FILTER (WHERE status = 'in-progress') as in_progress,
        COUNT(*) FILTER (WHERE status = 'resolved') as resolved
      FROM tickets
    `);

    res.json({
      success: true,
      stats: {
        totalTickets: parseInt(ticketsResult.rows[0].total),
        activeUsers: parseInt(activeUsersResult.rows[0].active),
        avgResponseTime: '2.5h', // Placeholder - calculate based on actual data
        resolutionRate: `${resolutionRate}%`,
        distribution: distributionResult.rows[0]
      }
    });
  } catch (error) {
    console.error('Get admin stats error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Get analytics metrics
// @route   GET /api/admin/analytics/metrics
// @access  Private (Admin)
exports.getAnalyticsMetrics = async (req, res) => {
  try {
    // Tickets this month
    const thisMonthResult = await pool.query(`
      SELECT COUNT(*) as count
      FROM tickets
      WHERE EXTRACT(MONTH FROM created_at) = EXTRACT(MONTH FROM CURRENT_DATE)
      AND EXTRACT(YEAR FROM created_at) = EXTRACT(YEAR FROM CURRENT_DATE)
    `);

    // Resolution rate
    const resolutionResult = await pool.query(`
      SELECT 
        COUNT(*) FILTER (WHERE status = 'resolved') as resolved,
        COUNT(*) as total
      FROM tickets
    `);

    const resolutionRate = resolutionResult.rows[0].total > 0
      ? Math.round((resolutionResult.rows[0].resolved / resolutionResult.rows[0].total) * 100)
      : 0;

    // Open tickets
    const openTicketsResult = await pool.query(`
      SELECT COUNT(*) as count
      FROM tickets
      WHERE status = 'open'
    `);

    res.json({
      success: true,
      metrics: {
        ticketsThisMonth: parseInt(thisMonthResult.rows[0].count),
        resolutionRate: `${resolutionRate}%`,
        avgResponseTime: '2.5h',
        openTickets: parseInt(openTicketsResult.rows[0].count)
      }
    });
  } catch (error) {
    console.error('Get analytics metrics error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Get priority distribution
// @route   GET /api/admin/analytics/priority-distribution
// @access  Private (Admin)
exports.getPriorityDistribution = async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT 
        COUNT(*) FILTER (WHERE priority = 'urgent') as urgent,
        COUNT(*) FILTER (WHERE priority = 'high') as high,
        COUNT(*) FILTER (WHERE priority = 'medium') as medium,
        COUNT(*) FILTER (WHERE priority = 'low') as low
      FROM tickets
    `);

    res.json({
      success: true,
      distribution: result.rows[0]
    });
  } catch (error) {
    console.error('Get priority distribution error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Get category distribution
// @route   GET /api/admin/analytics/category-distribution
// @access  Private (Admin)
exports.getCategoryDistribution = async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT category, COUNT(*) as count
      FROM tickets
      GROUP BY category
      ORDER BY count DESC
    `);

    const distribution = {};
    result.rows.forEach(row => {
      distribution[row.category] = parseInt(row.count);
    });

    res.json({
      success: true,
      distribution
    });
  } catch (error) {
    console.error('Get category distribution error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};
