import DashboardLayout from '../../components/layout/DashboardLayout'
import StatCard from '../../components/common/StatCard'
import { Ticket, Clock, CheckCircle, AlertCircle } from 'lucide-react'
import { useAuth } from '../../hooks/useAuth'
import '../../styles/user.css'

export default function UserDashboard() {
  const { user } = useAuth()
  const stats = {
    total: 12,
    open: 5,
    inProgress: 4,
    resolved: 3
  }

  return (
    <DashboardLayout>
      <div className="user-container">
        <div className="user-header">
          <h1 className="user-title">Welcome, {user?.name}!</h1>
          <p className="user-subtitle">Here's an overview of your tickets</p>
        </div>

        <div className="user-stats-grid">
          <StatCard title="Total Tickets" value={stats.total} icon={Ticket} gradient="from-blue-500 to-blue-600" />
          <StatCard title="Open" value={stats.open} icon={Clock} gradient="from-yellow-500 to-yellow-600" />
          <StatCard title="In Progress" value={stats.inProgress} icon={AlertCircle} gradient="from-purple-500 to-purple-600" />
          <StatCard title="Resolved" value={stats.resolved} icon={CheckCircle} gradient="from-green-500 to-green-600" />
        </div>

        <div className="user-card">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Tickets</h2>
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h3 className="font-semibold text-gray-800">Ticket #{1000 + i}</h3>
                  <p className="text-sm text-gray-600">Issue with login functionality</p>
                </div>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">Open</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
