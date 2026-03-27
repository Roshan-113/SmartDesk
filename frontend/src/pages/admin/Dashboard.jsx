import { useEffect, useState } from 'react'
import DashboardLayout from '../../components/layout/DashboardLayout'
import StatCard from '../../components/common/StatCard'
import { Ticket, Users, Clock, TrendingUp } from 'lucide-react'
import '../../styles/admin.css'

export default function AdminDashboard() {

  const [stats, setStats] = useState({
    totalTickets: 0,
    activeUsers: 0,
    avgResponseTime: '2.5h',
    resolutionRate: '0%'
  })

  const [recentTickets, setRecentTickets] = useState([])
  const [statusPercent, setStatusPercent] = useState({
    open: 0,
    inProgress: 0,
    resolved: 0
  })

  useEffect(() => {
    const tickets = JSON.parse(localStorage.getItem('tickets')) || []
    const users = JSON.parse(localStorage.getItem('users')) || []

    const total = tickets.length
    const open = tickets.filter(t => t.status === 'open').length
    const inProgress = tickets.filter(t => t.status === 'in-progress').length
    const resolved = tickets.filter(t => t.status === 'resolved').length

    const resolutionRate = total
      ? Math.round((resolved / total) * 100) + '%'
      : '0%'

    setStats({
      totalTickets: total,
      activeUsers: users.length,
      avgResponseTime: '2.5h',
      resolutionRate
    })

    // ✅ RECENT TICKETS (latest 4)
    setRecentTickets(tickets.slice(-4).reverse())

    // ✅ STATUS %
    setStatusPercent({
      open: total ? Math.round((open / total) * 100) : 0,
      inProgress: total ? Math.round((inProgress / total) * 100) : 0,
      resolved: total ? Math.round((resolved / total) * 100) : 0
    })

  }, [])

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

          {/* ✅ RECENT TICKETS */}
          <div className="card">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent mb-6">
              Recent Tickets
            </h2>

            <div className="space-y-3">
              {recentTickets.map((ticket) => (
                <div key={ticket.id} className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-blue-50/50 rounded-xl hover:from-blue-50 hover:to-indigo-50 transition-all border-2 border-transparent hover:border-blue-200 shadow-sm hover:shadow-md">
                  <div>
                    <p className="font-bold text-gray-900 text-lg">Ticket #{ticket.id}</p>
                    <p className="text-sm text-gray-600 font-medium">{ticket.title}</p>
                  </div>

                  <span className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide border shadow-sm ${
                    ticket.status === 'open'
                      ? 'bg-yellow-100 text-yellow-800 border-yellow-300'
                      : ticket.status === 'in-progress'
                      ? 'bg-blue-100 text-blue-800 border-blue-300'
                      : 'bg-green-100 text-green-800 border-green-300'
                  }`}>
                    {ticket.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ✅ STATUS DISTRIBUTION */}
          <div className="card">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent mb-6">
              Ticket Status Distribution
            </h2>

            <div className="space-y-5">

              {/* OPEN */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-gray-800 font-bold">Open</span>
                  <span className="text-sm font-bold text-gray-700">{statusPercent.open}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-yellow-500 h-3 rounded-full" style={{ width: `${statusPercent.open}%` }}></div>
                </div>
              </div>

              {/* IN PROGRESS */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-gray-800 font-bold">In Progress</span>
                  <span className="text-sm font-bold text-gray-700">{statusPercent.inProgress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-blue-500 h-3 rounded-full" style={{ width: `${statusPercent.inProgress}%` }}></div>
                </div>
              </div>

              {/* RESOLVED */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-gray-800 font-bold">Resolved</span>
                  <span className="text-sm font-bold text-gray-700">{statusPercent.resolved}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-green-500 h-3 rounded-full" style={{ width: `${statusPercent.resolved}%` }}></div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </DashboardLayout>
  )
}