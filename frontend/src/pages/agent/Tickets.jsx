import { useState, useEffect } from 'react'
import DashboardLayout from '../../components/layout/DashboardLayout'
import SearchBar from '../../components/common/SearchBar'
import TicketTable from '../../components/ticket/TicketTable'
import { Filter } from 'lucide-react'
import '../../styles/user.css'

export default function Tickets() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')
  const [tickets, setTickets] = useState([])

  // ✅ LOAD TICKETS FROM LOCALSTORAGE
  useEffect(() => {
    const storedTickets = JSON.parse(localStorage.getItem('tickets')) || []

    // 👉 OPTIONAL: filter only assigned tickets
    // const assignedTickets = storedTickets.filter(t => t.assignedTo === 'Agent 1')

    setTickets(storedTickets)
  }, [])

  // ✅ FILTER LOGIC
  const filteredTickets = tickets.filter((ticket) => {
    const matchesSearch = ticket.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = filterStatus === 'all' || ticket.status === filterStatus
    return matchesSearch && matchesStatus
  })

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
              <SearchBar 
                value={searchTerm} 
                onChange={setSearchTerm} 
                placeholder="Search tickets..." 
              />
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

          {/* ✅ DYNAMIC DATA FROM LOCALSTORAGE */}
          <TicketTable tickets={filteredTickets} />
        </div>
      </div>
    </DashboardLayout>
  )
}