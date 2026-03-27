import { Link } from 'react-router-dom'
import Badge from '../ui/Badge'
import { getStatusColor, getPriorityColor } from '../../utils/helpers'

export default function TicketCard({ ticket }) {
  return (
    <Link to={`/tickets/${ticket.id}`}>
      <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-gray-800">#{ticket.id} - {ticket.title}</h3>
          <Badge className={getStatusColor(ticket.status)}>{ticket.status}</Badge>
        </div>
        <p className="text-sm text-gray-600 mb-3">{ticket.description}</p>
        <div className="flex items-center justify-between">
          <Badge className={getPriorityColor(ticket.priority)}>{ticket.priority}</Badge>
          <span className="text-xs text-gray-500">{ticket.createdAt}</span>
        </div>
      </div>
    </Link>
  )
}
