import DashboardLayout from '../../components/layout/DashboardLayout'
import StatCard from '../../components/common/StatCard'
import { Ticket, Clock, CheckCircle, AlertCircle, TrendingUp } from 'lucide-react'
import { useAuth } from '../../hooks/useAuth'
import { Link } from 'react-router-dom'
import '../../styles/user.css'

export default function UserDashboard() {
  const { user } = useAuth()
  const stats = {
    total: 12,
    open: 5,
    inProgress: 4,
    resolved: 3
  }

  const recentTickets = [
    { id: 1001, title: 'Login issue on mobile app', status: 'open', priority: 'high', time: '2 hours ago' },
    { id: 1002, title: 'Payment not processing', status: 'in-progress', priority: 'urgent', time: '5 hours ago' },
    { id: 1003, title: 'Feature request for dashboard', status: 'open', priority: 'low', time: '1 day ago' },
  ]

  return (
    <DashboardLayout>
      <div className="user-container">
        <div className="page-header">
          <h1 className="page-title">Welcome back, {user?.name}! 👋</h1>
          <p className="page-subtitle">Here's what's happening with your tickets today</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard 
            title="Total Tickets" 
            value={stats.total} 
            icon={Ticket} 
            gradient="from-blue-500 to-blue-600"
            trend={12}
          />
          <StatCard 
            title="Open" 
            value={stats.open} 
            icon={Clock} 
            gradient="from-yellow-500 to-yellow-600"
            trend={-5}
          />
          <StatCard 
            title="In Progress" 
            value={stats.inProgress} 
            icon={AlertCircle} 
            gradient="from-purple-500 to-purple-600"
            trend={8}
          />
          <StatCard 
            title="Resolved" 
            value={stats.resolved} 
            icon={CheckCircle} 
            gradient="from-green-500 to-green-600"
            trend={15}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 card">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Recent Tickets</h2>
              <Link to="/user/tickets" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                View All →
              </Link>
            </div>
            <div className="space-y-3">
              {recentTickets.map((ticket) => (
                <Link 
                  key={ticket.id}
                  to={`/tickets/${ticket.id}`}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all group"
                >
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-1">
                      <span className="text-sm font-semibold text-gray-900">#{ticket.id}</span>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                        ticket.status === 'open' ? 'bg-yellow-100 text-yellow-800' :
                        ticket.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {ticket.status}
                      </span>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                        ticket.priority === 'urgent' ? 'bg-red-100 text-red-800' :
                        ticket.priority === 'high' ? 'bg-orange-100 text-orange-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {ticket.priority}
                      </span>
                    </div>
                    <p className="text-gray-700 font-medium group-hover:text-primary-600 transition-colors">
                      {ticket.title}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">{ticket.time}</p>
                  </div>
                  <div className="text-gray-400 group-hover:text-primary-600 transition-colors">
                    →
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="card bg-gradient-to-br from-primary-50 to-purple-50 border border-primary-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Link 
                  to="/user/tickets/create"
                  className="block w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white px-4 py-3 rounded-lg hover:from-primary-700 hover:to-primary-800 transition-all text-center font-medium shadow-md hover:shadow-lg"
                >
                  + Create New Ticket
                </Link>
                <Link 
                  to="/user/tickets"
                  className="block w-full bg-white text-gray-700 px-4 py-3 rounded-lg hover:bg-gray-50 transition-all text-center font-medium border border-gray-200"
                >
                  View All Tickets
                </Link>
              </div>
            </div>

            <div className="card">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Support Tips</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Provide detailed descriptions for faster resolution</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Set priority correctly to help us prioritize</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Check ticket status regularly for updates</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
