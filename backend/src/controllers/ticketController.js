const pool = require('../config/database');

// @desc    Get all tickets (filtered by role)
// @route   GET /api/tickets
// @access  Private
exports.getTickets = async (req, res) => {
  try {
    const { search, status } = req.query;
    const userId = req.user.id;
    const userRole = req.user.role;

    let query = `
      SELECT t.*, 
             u.name as user_name,
             a.name as assigned_to_name
      FROM tickets t
      LEFT JOIN users u ON t.user_id = u.id
      LEFT JOIN users a ON t.assigned_to = a.id
    `;
    
    const conditions = [];
    const values = [];
    let paramCount = 1;

    // Role-based filtering
    if (userRole === 'user') {
      conditions.push(`t.user_id = $${paramCount}`);
      values.push(userId);
      paramCount++;
    } else if (userRole === 'agent') {
      conditions.push(`t.assigned_to = $${paramCount}`);
      values.push(userId);
      paramCount++;
    }
    // Admin sees all tickets

    // Status filter
    if (status && status !== 'all') {
      conditions.push(`t.status = $${paramCount}`);
      values.push(status);
      paramCount++;
    }

    // Search filter
    if (search) {
      conditions.push(`(t.title ILIKE $${paramCount} OR t.description ILIKE $${paramCount})`);
      values.push(`%${search}%`);
      paramCount++;
    }

    if (conditions.length > 0) {
      query += ' WHERE ' + conditions.join(' AND ');
    }

    query += ' ORDER BY t.created_at DESC';

    const result = await pool.query(query, values);

    res.json({
      success: true,
      count: result.rows.length,
      tickets: result.rows
    });
  } catch (error) {
    console.error('Get tickets error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Get single ticket
// @route   GET /api/tickets/:id
// @access  Private
exports.getTicket = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(`
      SELECT t.*, 
             u.name as user_name,
             u.email as user_email,
             a.name as assigned_to_name
      FROM tickets t
      LEFT JOIN users u ON t.user_id = u.id
      LEFT JOIN users a ON t.assigned_to = a.id
      WHERE t.id = $1
    `, [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Ticket not found'
      });
    }

    const ticket = result.rows[0];

    // Check authorization
    if (req.user.role === 'user' && ticket.user_id !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to view this ticket'
      });
    }

    if (req.user.role === 'agent' && ticket.assigned_to !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to view this ticket'
      });
    }

    res.json({
      success: true,
      ticket
    });
  } catch (error) {
    console.error('Get ticket error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Create ticket
// @route   POST /api/tickets
// @access  Private (User)
exports.createTicket = async (req, res) => {
  try {
    const { title, description, priority, category } = req.body;
    const userId = req.user.id;

    const result = await pool.query(`
      INSERT INTO tickets (title, description, priority, category, user_id, status)
      VALUES ($1, $2, $3, $4, $5, 'open')
      RETURNING *
    `, [title, description, priority, category, userId]);

    res.status(201).json({
      success: true,
      ticket: result.rows[0],
      message: 'Ticket created successfully'
    });
  } catch (error) {
    console.error('Create ticket error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Update ticket
// @route   PUT /api/tickets/:id
// @access  Private (Agent/Admin)
exports.updateTicket = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, status, priority, category, assigned_to } = req.body;

    // Check if ticket exists
    const ticketCheck = await pool.query('SELECT * FROM tickets WHERE id = $1', [id]);
    
    if (ticketCheck.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Ticket not found'
      });
    }

    // Build update query dynamically
    const updates = [];
    const values = [];
    let paramCount = 1;

    if (title) {
      updates.push(`title = $${paramCount}`);
      values.push(title);
      paramCount++;
    }
    if (description) {
      updates.push(`description = $${paramCount}`);
      values.push(description);
      paramCount++;
    }
    if (status) {
      updates.push(`status = $${paramCount}`);
      values.push(status);
      paramCount++;
    }
    if (priority) {
      updates.push(`priority = $${paramCount}`);
      values.push(priority);
      paramCount++;
    }
    if (category) {
      updates.push(`category = $${paramCount}`);
      values.push(category);
      paramCount++;
    }
    if (assigned_to !== undefined) {
      updates.push(`assigned_to = $${paramCount}`);
      values.push(assigned_to);
      paramCount++;
    }

    updates.push(`updated_at = CURRENT_TIMESTAMP`);
    values.push(id);

    const query = `
      UPDATE tickets 
      SET ${updates.join(', ')}
      WHERE id = $${paramCount}
      RETURNING *
    `;

    const result = await pool.query(query, values);

    res.json({
      success: true,
      ticket: result.rows[0],
      message: 'Ticket updated successfully'
    });
  } catch (error) {
    console.error('Update ticket error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Delete ticket
// @route   DELETE /api/tickets/:id
// @access  Private (Admin)
exports.deleteTicket = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query('DELETE FROM tickets WHERE id = $1 RETURNING *', [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Ticket not found'
      });
    }

    res.json({
      success: true,
      message: 'Ticket deleted successfully'
    });
  } catch (error) {
    console.error('Delete ticket error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Get ticket statistics
// @route   GET /api/tickets/stats
// @access  Private
exports.getTicketStats = async (req, res) => {
  try {
    const userId = req.user.id;
    const userRole = req.user.role;

    let whereClause = '';
    const values = [];

    if (userRole === 'user') {
      whereClause = 'WHERE user_id = $1';
      values.push(userId);
    } else if (userRole === 'agent') {
      whereClause = 'WHERE assigned_to = $1';
      values.push(userId);
    }

    const result = await pool.query(`
      SELECT 
        COUNT(*) as total,
        COUNT(*) FILTER (WHERE status = 'open') as open,
        COUNT(*) FILTER (WHERE status = 'in-progress') as in_progress,
        COUNT(*) FILTER (WHERE status = 'resolved') as resolved
      FROM tickets
      ${whereClause}
    `, values);

    res.json({
      success: true,
      stats: result.rows[0]
    });
  } catch (error) {
    console.error('Get stats error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};
