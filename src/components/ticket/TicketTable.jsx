import { Link } from 'react-router-dom'
import Badge from '../ui/Badge'
import { getStatusColor, getPriorityColor } from '../../utils/helpers'
import { useAuth } from '../../hooks/useAuth'

export default function TicketTable({ tickets }) {
  const { user } = useAuth()
  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200">
      <table className="w-full">
        <thead className="bg-gradient-to-r from-gray-50 to-blue-50/50">
          <tr>
            <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">ID</th>
            <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Title</th>
            <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Status</th>
            <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Priority</th>
            <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Created</th>
            <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 bg-white">
          {tickets.map((ticket, index) => (
            <tr key={ticket.id} className="hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-indigo-50/30 transition-all duration-200 group" style={{ animationDelay: `${index * 50}ms` }}>
              <td className="px-6 py-4 text-sm font-bold text-gray-900">
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">#{ticket.id}</span>
              </td>
              <td className="px-6 py-4 text-sm font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">{ticket.title}</td>
              <td className="px-6 py-4">
                <Badge className={getStatusColor(ticket.status)}>{ticket.status}</Badge>
              </td>
              <td className="px-6 py-4">
                <Badge className={getPriorityColor(ticket.priority)}>{ticket.priority}</Badge>
              </td>
              <td className="px-6 py-4 text-sm text-gray-600 font-medium">{ticket.createdAt}</td>
              <td className="px-6 py-4">
                <div className="flex items-center space-x-2">
                  <Link to={`/tickets/${ticket.id}`} className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-bold rounded-lg hover:from-blue-700 hover:to-indigo-700 shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105">
                    View
                  </Link>
                  {user?.role === 'admin' && (
                    <Link to={`/admin/tickets/${ticket.id}/edit`} className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-bold rounded-lg hover:from-purple-700 hover:to-pink-700 shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105">
                      Edit
                    </Link>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
