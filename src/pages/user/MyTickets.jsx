import { useState } from 'react'
import DashboardLayout from '../../components/layout/DashboardLayout'
import SearchBar from '../../components/common/SearchBar'
import TicketTable from '../../components/ticket/TicketTable'
import { Filter } from 'lucide-react'
import '../../styles/user.css'

export default function MyTickets() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')

  const tickets = [
    { id: 1001, title: 'Login issue', status: 'open', priority: 'high', createdAt: '2024-03-20', assignedTo: 'Agent 1' },
    { id: 1002, title: 'Payment not processing', status: 'in-progress', priority: 'urgent', createdAt: '2024-03-19', assignedTo: 'Agent 2' },
    { id: 1003, title: 'Feature request', status: 'resolved', priority: 'low', createdAt: '2024-03-18', assignedTo: 'Agent 3' },
    { id: 1004, title: 'Bug in dashboard', status: 'open', priority: 'medium', createdAt: '2024-03-17', assignedTo: 'Agent 1' },
  ]

  return (
    <DashboardLayout>
      <div className="user-container animate-fadeIn">
        <div className="page-header">
          <h1 className="page-title">My Tickets</h1>
          <p className="page-subtitle">View and manage your service requests</p>
        </div>

        <div className="card animate-slideUp">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <SearchBar value={searchTerm} onChange={setSearchTerm} placeholder="Search tickets..." />
            </div>
            <div className="flex items-center space-x-3 bg-gradient-to-r from-gray-50 to-blue-50 px-4 py-2 rounded-xl border-2 border-gray-200">
              <Filter className="w-5 h-5 text-blue-600" />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="bg-transparent border-none outline-none font-semibold text-gray-700 cursor-pointer"
              >
                <option value="all">All Status</option>
                <option value="open">Open</option>
                <option value="in-progress">In Progress</option>
                <option value="resolved">Resolved</option>
              </select>
            </div>
          </div>

          <TicketTable tickets={tickets} />
        </div>
      </div>
    </DashboardLayout>
  )
}
