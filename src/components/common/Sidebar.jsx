import { Link, useLocation } from 'react-router-dom'
import { Home, Plus, List, Users, BarChart3, Ticket } from 'lucide-react'
import { useAuth } from '../../context/AuthContext'

export default function Sidebar() {
  const location = useLocation()
  const { user } = useAuth()

  const userLinks = [
    { to: '/dashboard', icon: Home, label: 'Dashboard' },
    { to: '/tickets/create', icon: Plus, label: 'Create Ticket' },
    { to: '/tickets/my-tickets', icon: List, label: 'My Tickets' },
  ]

  const adminLinks = [
    { to: '/admin', icon: Home, label: 'Dashboard' },
    { to: '/admin/tickets', icon: Ticket, label: 'All Tickets' },
    { to: '/admin/users', icon: Users, label: 'Users' },
    { to: '/admin/analytics', icon: BarChart3, label: 'Analytics' },
  ]

  const links = user?.role === 'admin' ? adminLinks : userLinks

  return (
    <aside className="w-72 bg-white/80 backdrop-blur-lg shadow-xl border-r-2 border-gray-100 min-h-screen">
      <nav className="p-6 space-y-2">
        {links.map((link) => {
          const Icon = link.icon
          const isActive = location.pathname === link.to
          
          return (
            <Link
              key={link.to}
              to={link.to}
              className={`flex items-center space-x-4 px-5 py-4 rounded-xl transition-all duration-300 group ${
                isActive
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg transform scale-105'
                  : 'text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-700 border-2 border-transparent hover:border-blue-200'
              }`}
            >
              <div className={`p-2 rounded-lg ${isActive ? 'bg-white/20' : 'bg-gray-100 group-hover:bg-blue-100'}`}>
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
