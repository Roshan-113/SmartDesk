import { useEffect, useState } from 'react'
import DashboardLayout from '../../components/layout/DashboardLayout'
import StatCard from '../../components/common/StatCard'
import { Ticket, Clock, CheckCircle, AlertCircle } from 'lucide-react'
import { useAuth } from '../../hooks/useAuth'
import { Link } from 'react-router-dom'
import '../../styles/user.css'

export default function UserDashboard() {
  const { user } = useAuth()

  const [tickets, setTickets] = useState([])

  // ✅ LOAD TICKETS FROM LOCALSTORAGE
  useEffect(() => {
    const storedTickets = JSON.parse(localStorage.getItem('tickets')) || []
    setTickets(storedTickets)
  }, [])

  // ✅ DYNAMIC STATS
  const stats = {
    total: tickets.length,
    open: tickets.filter(t => t.status === 'open').length,
    inProgress: tickets.filter(t => t.status === 'in-progress').length,
    resolved: tickets.filter(t => t.status === 'resolved').length
  }

  // ✅ RECENT TICKETS (LAST 3)
  const recentTickets = tickets.slice(-3).reverse()

  return (
    <DashboardLayout>
      <div className="user-container animate-fadeIn">
        <div className="page-header">
          <h1 className="page-title">Welcome back, {user?.name}! 👋</h1>
          <p className="page-subtitle">Here's what's happening with your tickets today</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 animate-slideUp">
          <StatCard 
            title="Total Tickets" 
            value={stats.total} 
            icon={Ticket} 
            gradient="from-blue-600 to-indigo-700"
            trend={12}
          />
          <StatCard 
            title="Open" 
            value={stats.open} 
            icon={Clock} 
            gradient="from-amber-500 to-orange-600"
            trend={-5}
          />
          <StatCard 
            title="In Progress" 
            value={stats.inProgress} 
            icon={AlertCircle} 
            gradient="from-purple-600 to-pink-600"
            trend={8}
          />
          <StatCard 
            title="Resolved" 
            value={stats.resolved} 
            icon={CheckCircle} 
            gradient="from-emerald-500 to-teal-600"
            trend={15}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 card">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">
                Recent Tickets
              </h2>
              <Link to="/user/tickets" className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all font-semibold shadow-md hover:shadow-lg">
                <span>View All</span>
                <span>→</span>
              </Link>
            </div>

            <div className="space-y-3">
              {recentTickets.map((ticket, index) => (
                <Link 
                  key={ticket.id}
                  to={`/tickets/${ticket.id}`}
                  className="flex items-center justify-between p-5 bg-gradient-to-r from-gray-50 to-blue-50/50 rounded-xl hover:from-blue-50 hover:to-indigo-50 transition-all group border-2 border-transparent hover:border-blue-200 shadow-sm hover:shadow-md"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="text-sm font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                        #{ticket.id}
                      </span>

                      <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${
                        ticket.status === 'open'
                          ? 'bg-gradient-to-r from-yellow-100 to-amber-100 text-yellow-800 border border-yellow-300'
                          : ticket.status === 'in-progress'
                          ? 'bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 border border-blue-300'
                          : 'bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border border-green-300'
                      }`}>
                        {ticket.status}
                      </span>

                      <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${
                        ticket.priority === 'urgent'
                          ? 'bg-gradient-to-r from-red-100 to-rose-100 text-red-800 border border-red-300'
                          : ticket.priority === 'high'
                          ? 'bg-gradient-to-r from-orange-100 to-amber-100 text-orange-800 border border-orange-300'
                          : 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 border border-gray-300'
                      }`}>
                        {ticket.priority}
                      </span>
                    </div>

                    <p className="text-gray-800 font-semibold group-hover:text-blue-700 transition-colors text-lg">
                      {ticket.title}
                    </p>

                    {/* ✅ fallback if time not present */}
                    <p className="text-xs text-gray-500 mt-2 font-medium">
                      {ticket.createdAt || 'Just now'}
                    </p>
                  </div>

                  <div className="text-gray-400 group-hover:text-blue-600 transition-colors text-2xl font-bold">
                    →
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE SAME (NO CHANGE) */}
          <div className="space-y-6">
            <div className="card bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 border-2 border-blue-100">
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-900 to-indigo-900 bg-clip-text text-transparent mb-5">
                Quick Actions
              </h3>
              <div className="space-y-3">
                <Link 
                  to="/user/tickets/create"
                  className="block w-full bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white px-5 py-4 rounded-xl hover:from-blue-700 hover:via-blue-800 hover:to-indigo-800 transition-all text-center font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  + Create New Ticket
                </Link>

                <Link 
                  to="/user/tickets"
                  className="block w-full bg-white text-gray-700 px-5 py-4 rounded-xl hover:bg-gray-50 transition-all text-center font-bold border-2 border-gray-200 hover:border-gray-300 shadow-md hover:shadow-lg"
                >
                  View All Tickets
                </Link>
              </div>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent mb-5">
                Support Tips
              </h3>
              <ul className="space-y-4 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl font-bold">•</span>
                  <span className="font-medium">Provide detailed descriptions for faster resolution</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl font-bold">•</span>
                  <span className="font-medium">Set priority correctly to help us prioritize</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl font-bold">•</span>
                  <span className="font-medium">Check ticket status regularly for updates</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}