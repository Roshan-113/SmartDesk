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
      <div className="admin-container animate-fadeIn">
        <div className="page-header">
          <h1 className="page-title">Admin Dashboard</h1>
          <p className="page-subtitle">System overview and statistics</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 animate-slideUp">
          <StatCard title="Total Tickets" value={stats.totalTickets} icon={Ticket} gradient="from-blue-600 to-indigo-700" />
          <StatCard title="Active Users" value={stats.activeUsers} icon={Users} gradient="from-emerald-500 to-teal-600" />
          <StatCard title="Avg Response" value={stats.avgResponseTime} icon={Clock} gradient="from-purple-600 to-pink-600" />
          <StatCard title="Resolution Rate" value={stats.resolutionRate} icon={TrendingUp} gradient="from-amber-500 to-orange-600" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="card">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent mb-6">Recent Tickets</h2>
            <div className="space-y-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-blue-50/50 rounded-xl hover:from-blue-50 hover:to-indigo-50 transition-all border-2 border-transparent hover:border-blue-200 shadow-sm hover:shadow-md">
                  <div>
                    <p className="font-bold text-gray-900 text-lg">Ticket #{1000 + i}</p>
                    <p className="text-sm text-gray-600 font-medium">User reported issue</p>
                  </div>
                  <span className="px-4 py-2 bg-gradient-to-r from-yellow-100 to-amber-100 text-yellow-800 rounded-full text-xs font-bold uppercase tracking-wide border border-yellow-300 shadow-sm">
                    Open
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent mb-6">Ticket Status Distribution</h2>
            <div className="space-y-5">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-gray-800 font-bold">Open</span>
                  <span className="text-sm font-bold text-gray-700">35%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden shadow-inner">
                  <div className="bg-gradient-to-r from-yellow-500 to-amber-600 h-3 rounded-full shadow-md transition-all duration-500" style={{ width: '35%' }}></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-gray-800 font-bold">In Progress</span>
                  <span className="text-sm font-bold text-gray-700">45%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden shadow-inner">
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-600 h-3 rounded-full shadow-md transition-all duration-500" style={{ width: '45%' }}></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-gray-800 font-bold">Resolved</span>
                  <span className="text-sm font-bold text-gray-700">20%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden shadow-inner">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-600 h-3 rounded-full shadow-md transition-all duration-500" style={{ width: '20%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
