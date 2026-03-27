import DashboardLayout from '../../components/layout/DashboardLayout'
import StatCard from '../../components/common/StatCard'
import { Ticket, Clock, CheckCircle } from 'lucide-react'
import '../../styles/user.css'

export default function AgentDashboard() {
  const stats = {
    assigned: 12,
    inProgress: 5,
    resolved: 28,
    avgResponseTime: '2.3h'
  }

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
          <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Assigned Tickets</h2>
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h3 className="font-semibold text-gray-800">Ticket #{1000 + i}</h3>
                  <p className="text-sm text-gray-600">Customer reported issue</p>
                </div>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  In Progress
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
