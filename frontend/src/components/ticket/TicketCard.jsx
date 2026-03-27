import { Link } from 'react-router-dom'
import Badge from '../ui/Badge'
import { getStatusColor, getPriorityColor } from '../../utils/helpers'
import { Clock } from 'lucide-react'

export default function TicketCard({ ticket }) {
  return (
    <Link to={`/tickets/${ticket.id}`} className="block group">
      <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-blue-200 transform hover:-translate-y-1">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-bold text-gray-900 text-lg group-hover:text-blue-700 transition-colors">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">#{ticket.id}</span> - {ticket.title}
          </h3>
          <Badge className={getStatusColor(ticket.status)}>{ticket.status}</Badge>
        </div>
        <p className="text-sm text-gray-600 mb-4 font-medium line-clamp-2">{ticket.description}</p>
        <div className="flex items-center justify-between">
          <Badge className={getPriorityColor(ticket.priority)}>{ticket.priority}</Badge>
          <div className="flex items-center space-x-2 text-xs text-gray-500 font-medium">
            <Clock className="w-4 h-4" />
            <span>{ticket.createdAt}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
