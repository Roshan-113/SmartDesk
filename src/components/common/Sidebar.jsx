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
                  ? 'bg-primary text-white'
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
