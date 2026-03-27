import { Link, useLocation } from 'react-router-dom'
import { Home, Plus, List, Users, BarChart3, Ticket } from 'lucide-react'
import { useAuth } from '../../hooks/useAuth'

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

  const getLinks = () => {
    if (user?.role === 'admin') return adminLinks
    if (user?.role === 'agent') return agentLinks
    return userLinks
  }

  const links = getLinks()

  return (
    <aside className="w-64 bg-white shadow-md min-h-screen">
      <nav className="p-4 space-y-2">
        {links.map((link) => {
          const Icon = link.icon
          const isActive = location.pathname === link.to
          
          return (
            <Link
              key={link.to}
              to={link.to}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{link.label}</span>
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
