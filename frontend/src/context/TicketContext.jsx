import { createContext, useState } from 'react'
import { ticketService } from '../services/ticketService'

export const TicketContext = createContext(null)

export const TicketProvider = ({ children }) => {
  const [tickets, setTickets] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchTickets = async () => {
    setLoading(true)
    try {
      const response = await ticketService.getAllTickets()
      setTickets(response.data)
    } catch (error) {
      console.error('Error fetching tickets:', error)
    } finally {
      setLoading(false)
    }
  }

  const createTicket = async (ticketData) => {
    try {
      const response = await ticketService.createTicket(ticketData)
      setTickets([...tickets, response.data])
      return response.data
    } catch (error) {
      console.error('Error creating ticket:', error)
      throw error
    }
  }

  return (
    <TicketContext.Provider value={{ tickets, loading, fetchTickets, createTicket }}>
      {children}
    </TicketContext.Provider>
  )
}
