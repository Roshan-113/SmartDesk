import { useState } from 'react'
import DashboardLayout from '../../components/layout/DashboardLayout'
import SearchBar from '../../components/common/SearchBar'
import TicketTable from '../../components/ticket/TicketTable'
import { Filter } from 'lucide-react'
import '../../styles/user.css'

export default function AgentTickets() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')

  const tickets = [
    { id: 1001, title: 'Login issue', status: 'in-progress', priority: 'high', createdAt: '2024-03-20' },
    { id: 1002, title: 'Payment error', status: 'open', priority: 'urgent', createdAt: '2024-03-19' },
  ]

  return (
    <DashboardLayout>
      <div className="user-container">
        <div className="user-header">
          <h1 className="user-title">Assigned Tickets</h1>
          <p className="user-subtitle">Tickets assigned to you</p>
        </div>

        <div className="user-card">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <SearchBar value={searchTerm} onChange={setSearchTerm} placeholder="Search tickets..." />
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-600" />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="user-form-input"
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
