import api from './api'

export const userService = {
  getAllUsers: async () => {
    // Mock data - replace with: return api.get('/users')
    return {
      data: [
        { id: 1, name: 'John Doe', email: 'john@example.com', role: 'user', status: 'active' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'agent', status: 'active' }
      ]
    }
  },

  getUserById: async (id) => {
    // Replace with: return api.get(`/users/${id}`)
    return { data: { id, name: 'John Doe', email: 'john@example.com' } }
  },

  updateUser: async (id, updates) => {
    // Replace with: return api.put(`/users/${id}`, updates)
    return { data: { id, ...updates } }
  }
}
