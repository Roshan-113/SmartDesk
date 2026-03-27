import axios from 'axios'

const API_URL = 'http://localhost:5000/api/tickets'

// ✅ Get token from localStorage
const getAuthConfig = () => {
  const token = localStorage.getItem('token')

  return {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
}

export const ticketService = {

  // ✅ CREATE TICKET
  createTicket: async (data) => {
    return await axios.post(API_URL, data, getAuthConfig())
  },

  // ✅ GET TICKET BY ID
  getTicketById: async (id) => {
    return await axios.get(`${API_URL}/${id}`, getAuthConfig())
  }

}