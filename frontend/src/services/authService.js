import api from './api'

export const authService = {
  login: async (email, password) => {
    // Mock implementation - replace with real API
    return {
      user: {
        id: 1,
        email,
        name: email.split('@')[0],
        role: email.includes('admin') ? 'admin' : email.includes('agent') ? 'agent' : 'user'
      },
      token: 'mock-jwt-token'
    }
  },

  register: async (userData) => {
    // Mock implementation - replace with real API
    return {
      user: {
        id: Date.now(),
        ...userData,
        role: 'user'
      },
      token: 'mock-jwt-token'
    }
  },

  logout: () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
  }
}
