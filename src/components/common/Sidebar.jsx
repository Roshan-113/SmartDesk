import { Link, useLocation } from 'react-router-dom'
import { Home, Plus, List, Users, BarChart3, Ticket } from 'lucide-react'
import { useAuth } from '../../context/AuthContext'
import SmartDeskLogo from './SmartDeskLogo'

export default function Sidebar() {
  const location = useLocation()
  const { user } = useAuth()

  const userLinks = [
    { to: '/user/dashboard', icon: Home, label: 'Dashboard' },
    { to: '/user/tickets/create', icon: Plus, label: 'Create Ticket' },
    { to: '/user/tickets', icon: List, label: 'My Tickets' },
  ]

  const agentLinks = [
    { to: '/agent/dashboard', icon: Home, label: 'Dashboard' },
    { to: '/agent/tickets', icon: Ticket, label: 'Assigned Tickets' },
  ]

  const adminLinks = [
    { to: '/admin/dashboard', icon: Home, label: 'Dashboard' },
    { to: '/admin/tickets', icon: Ticket, label: 'All Tickets' },
    { to: '/admin/users', icon: Users, label: 'Users' },
    { to: '/admin/analytics', icon: BarChart3, label: 'Analytics' },
  ]

  const links = user?.role === 'admin' ? adminLinks : user?.role === 'agent' ? agentLinks : userLinks

  return (
    <aside className="w-72 bg-blue-50 backdrop-blur-lg shadow-xl border-r-2 border-blue-200 min-h-screen flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b-2 border-blue-200 bg-gradient-to-br from-blue-100 to-indigo-100">
        <div className="flex items-center space-x-3">
          <SmartDeskLogo size="w-14 h-14" />
          <div>
            <span className="text-2xl font-extrabold bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent">SmartDesk</span>
            <p className="text-xs text-gray-700 font-semibold">Support Platform</p>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 p-6 space-y-2">
        {links.map((link) => {
          const Icon = link.icon
          const isActive = location.pathname === link.to
          
          return (
            <Link
              key={link.to}
              to={link.to}
              className={`flex items-center space-x-4 px-5 py-4 rounded-xl transition-all duration-300 group ${
                isActive
                  ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                  : 'text-gray-700 hover:bg-blue-100 hover:text-blue-700 border-2 border-transparent hover:border-blue-300'
              }`}
            >
              <div className={`p-2 rounded-lg ${isActive ? 'bg-white/20' : 'bg-white group-hover:bg-blue-200'}`}>
                <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-gray-600 group-hover:text-blue-600'}`} strokeWidth={2.5} />
              </div>
              <span className="font-bold text-base">{link.label}</span>
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
