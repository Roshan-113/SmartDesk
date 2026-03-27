import { useEffect, useState } from 'react'
import DashboardLayout from '../../components/layout/DashboardLayout'
import StatCard from '../../components/common/StatCard'
import { Ticket, Clock, CheckCircle } from 'lucide-react'
import '../../styles/user.css'

export default function Dashboard() {

  const [tickets, setTickets] = useState([])

  // ✅ LOAD FROM LOCALSTORAGE
  useEffect(() => {
    const storedTickets = JSON.parse(localStorage.getItem('tickets')) || []

    // 👉 OPTIONAL: filter only assigned tickets
    // const assignedTickets = storedTickets.filter(t => t.assignedTo === 'Agent 1')

    setTickets(storedTickets)
  }, [])

  // ✅ DYNAMIC STATS
  const stats = {
    assigned: tickets.length,
    inProgress: tickets.filter(t => t.status === 'in-progress').length,
    resolved: tickets.filter(t => t.status === 'resolved').length,
    avgResponseTime: '2.3h'
  }

  // ✅ RECENT TICKETS
  const recentTickets = tickets.slice(-3).reverse()

  return (
    <DashboardLayout>
      <div className="user-container">
        <div className="user-header">
          <h1 className="user-title">Agent Dashboard</h1>
          <p className="user-subtitle">Manage your assigned tickets</p>
        </div>

        <div className="user-stats-grid">
          <StatCard
            title="Assigned Tickets"
            value={stats.assigned}
            icon={Ticket}
            gradient="from-blue-500 to-blue-600"
          />
          <StatCard
            title="In Progress"
            value={stats.inProgress}
            icon={Clock}
            gradient="from-purple-500 to-purple-600"
          />
          <StatCard
            title="Resolved"
            value={stats.resolved}
            icon={CheckCircle}
            gradient="from-green-500 to-green-600"
          />
        </div>

        <div className="user-card">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Recent Assigned Tickets
          </h2>

          <div className="space-y-3">
            {recentTickets.map((ticket) => (
              <div key={ticket.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h3 className="font-semibold text-gray-800">
                    Ticket #{ticket.id}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {ticket.title}
                  </p>
                </div>

                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  ticket.status === 'open'
                    ? 'bg-yellow-100 text-yellow-800'
                    : ticket.status === 'in-progress'
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-green-100 text-green-800'
                }`}>
                  {ticket.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}