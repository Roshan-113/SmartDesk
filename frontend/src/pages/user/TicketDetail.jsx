import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import DashboardLayout from '../../components/layout/DashboardLayout'
import Badge from '../../components/ui/Badge'
import { ArrowLeft } from 'lucide-react'
import { getStatusColor, getPriorityColor } from '../../utils/helpers'
import { ticketService } from '../../services/ticketService'

export default function TicketDetail() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [ticket, setTicket] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchTicket = async () => {
      try {
        const res = await ticketService.getTicketById(id)

        // ✅ HANDLE ALL BACKEND RESPONSE FORMATS
        console.log("API Response:", res.data)

        const ticketData =
          res.data?.data ||
          res.data?.ticket ||
          res.data

        setTicket(ticketData)

      } catch (error) {
        console.error('Error fetching ticket:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchTicket()
  }, [id])

  // ✅ Loading state
  if (loading) return <p>Loading...</p>

  // ✅ No ticket found
  if (!ticket) return <p>Ticket not found</p>

  return (
    <DashboardLayout>
      <div className="max-w-4xl space-y-6">

        <button onClick={() => navigate(-1)}>
          <ArrowLeft /> Back
        </button>

        <div className="card">
          <h1>Ticket #{ticket._id || ticket.id}</h1>

          <p><b>Title:</b> {ticket.title}</p>

          <Badge className={getStatusColor(ticket.status)}>
            {ticket.status}
          </Badge>

          <p><b>Priority:</b> {ticket.priority}</p>
          <p><b>Category:</b> {ticket.category}</p>
          <p><b>Description:</b> {ticket.description}</p>
        </div>

      </div>
    </DashboardLayout>
  )
}