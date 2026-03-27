import api from './api'

export const ticketService = {
  getAllTickets: async () => {
    // Mock data - replace with: return api.get('/tickets')
    return {
      data: [
        { id: 1001, title: 'Login issue', status: 'open', priority: 'high', user: 'John Doe', createdAt: '2024-03-20' },
        { id: 1002, title: 'Payment error', status: 'in-progress', priority: 'urgent', user: 'Jane Smith', createdAt: '2024-03-19' }
      ]
    }
  },

  getMyTickets: async () => {
    // Mock data - replace with: return api.get('/tickets/my')
    return {
      data: [
        { id: 1001, title: 'Login issue', status: 'open', priority: 'high', createdAt: '2024-03-20' }
      ]
    }
  },

  getTicketById: async (id) => {
    // Mock data - replace with: return api.get(`/tickets/${id}`)
    return {
      data: {
        id,
        title: 'Login issue on mobile app',
        description: 'Users unable to login',
        status: 'in-progress',
        priority: 'high',
        category: 'technical',
        createdAt: '2024-03-20 10:30 AM'
      }
    }
  },

  createTicket: async (ticketData) => {
    // Replace with: return api.post('/tickets', ticketData)
    return { data: { id: Date.now(), ...ticketData } }
  },

  updateTicket: async (id, updates) => {
    // Replace with: return api.put(`/tickets/${id}`, updates)
    return { data: { id, ...updates } }
  }
}
