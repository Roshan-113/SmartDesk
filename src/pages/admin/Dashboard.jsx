import DashboardLayout from '../../components/layout/DashboardLayout'
import StatCard from '../../components/common/StatCard'
import { Ticket, Users, Clock, TrendingUp } from 'lucide-react'
import '../../styles/admin.css'

export default function AdminDashboard() {
  const stats = {
    totalTickets: 156,
    activeUsers: 42,
    avgResponseTime: '2.5h',
    resolutionRate: '87%'
  }

  return (
    <DashboardLayout>
      <div className="admin-container">
        <div className="admin-header">
          <h1 className="admin-title">Admin Dashboard</h1>
          <p className="admin-subtitle">System overview and statistics</p>
        </div>

        <div className="admin-grid">
          <StatCard title="Total Tickets" value={stats.totalTickets} icon={Ticket} gradient="from-blue-500 to-blue-600" />
          <StatCard title="Active Users" value={stats.activeUsers} icon={Users} gradient="from-green-500 to-green-600" />
          <StatCard title="Avg Response" value={stats.avgResponseTime} icon={Clock} gradient="from-purple-500 to-purple-600" />
          <StatCard title="Resolution Rate" value={stats.resolutionRate} icon={TrendingUp} gradient="from-orange-500 to-orange-600" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="admin-card">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Tickets</h2>
            <div className="space-y-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-semibold text-gray-800">Ticket #{1000 + i}</p>
                    <p className="text-sm text-gray-600">User reported issue</p>
                  </div>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">
                    Open
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="admin-card">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Ticket Status Distribution</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Open</span>
                <div className="flex items-center space-x-2">
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '35%' }}></div>
                  </div>
                  <span className="text-sm font-medium text-gray-700">35%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">In Progress</span>
                <div className="flex items-center space-x-2">
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                  <span className="text-sm font-medium text-gray-700">45%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Resolved</span>
                <div className="flex items-center space-x-2">
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '20%' }}></div>
                  </div>
                  <span className="text-sm font-medium text-gray-700">20%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
