const pool = require('../config/database');

// @desc    Get comments for a ticket
// @route   GET /api/tickets/:ticketId/comments
// @access  Private
exports.getComments = async (req, res) => {
  try {
    const { ticketId } = req.params;

    const result = await pool.query(`
      SELECT c.*, u.name as author_name, u.role as author_role
      FROM comments c
      LEFT JOIN users u ON c.user_id = u.id
      WHERE c.ticket_id = $1
      ORDER BY c.created_at ASC
    `, [ticketId]);

    res.json({
      success: true,
      count: result.rows.length,
      comments: result.rows
    });
  } catch (error) {
    console.error('Get comments error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Add comment to ticket
// @route   POST /api/tickets/:ticketId/comments
// @access  Private
exports.addComment = async (req, res) => {
  try {
    const { ticketId } = req.params;
    const { comment } = req.body;
    const userId = req.user.id;

    if (!comment || comment.trim() === '') {
      return res.status(400).json({
        success: false,
        message: 'Comment text is required'
      });
    }

    // Check if ticket exists
    const ticketCheck = await pool.query('SELECT * FROM tickets WHERE id = $1', [ticketId]);
    
    if (ticketCheck.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Ticket not found'
      });
    }

    const result = await pool.query(`
      INSERT INTO comments (ticket_id, user_id, comment)
      VALUES ($1, $2, $3)
      RETURNING *
    `, [ticketId, userId, comment]);

    // Get user info for response
    const commentWithUser = await pool.query(`
      SELECT c.*, u.name as author_name, u.role as author_role
      FROM comments c
      LEFT JOIN users u ON c.user_id = u.id
      WHERE c.id = $1
    `, [result.rows[0].id]);

    res.status(201).json({
      success: true,
      comment: commentWithUser.rows[0],
      message: 'Comment added successfully'
    });
  } catch (error) {
    console.error('Add comment error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};
