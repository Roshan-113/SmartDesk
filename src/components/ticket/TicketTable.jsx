import { Link } from 'react-router-dom'
import Badge from '../ui/Badge'
import { getStatusColor, getPriorityColor } from '../../utils/helpers'

export default function TicketTable({ tickets }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Priority</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Created</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {tickets.map((ticket) => (
            <tr key={ticket.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 text-sm font-medium text-gray-900">#{ticket.id}</td>
              <td className="px-6 py-4 text-sm text-gray-900">{ticket.title}</td>
              <td className="px-6 py-4">
                <Badge className={getStatusColor(ticket.status)}>{ticket.status}</Badge>
              </td>
              <td className="px-6 py-4">
                <Badge className={getPriorityColor(ticket.priority)}>{ticket.priority}</Badge>
              </td>
              <td className="px-6 py-4 text-sm text-gray-600">{ticket.createdAt}</td>
              <td className="px-6 py-4">
                <Link to={`/tickets/${ticket.id}`} className="text-blue-600 hover:underline text-sm font-medium">
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
