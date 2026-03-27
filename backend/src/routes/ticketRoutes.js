const express = require('express');
const router = express.Router();
const {
  getTickets,
  getTicket,
  createTicket,
  updateTicket,
  deleteTicket,
  getTicketStats
} = require('../controllers/ticketController');
const { getComments, addComment } = require('../controllers/commentController');
const { protect, authorize } = require('../middleware/auth');
const { createTicketValidator, updateTicketValidator } = require('../validators/ticketValidator');

// Ticket routes
router.get('/', protect, getTickets);
router.get('/stats', protect, getTicketStats);
router.get('/:id', protect, getTicket);
router.post('/', protect, authorize('user'), createTicketValidator, createTicket);
router.put('/:id', protect, authorize('agent', 'admin'), updateTicketValidator, updateTicket);
router.delete('/:id', protect, authorize('admin'), deleteTicket);

// Comment routes
router.get('/:ticketId/comments', protect, getComments);
router.post('/:ticketId/comments', protect, addComment);

module.exports = router;
