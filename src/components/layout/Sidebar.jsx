import { Link, useLocation } from 'react-router-dom'
import { Home, Plus, List, Users, BarChart3, Ticket, FileText } from 'lucide-react'
import { useAuth } from '../../hooks/useAuth'

export default function Sidebar() {
  const location = useLocation()
  const { user } = useAuth()

  const userLinks = [
    { to: '/user/dashboard', icon: Home, label: 'Dashboard', color: 'blue' },
    { to: '/user/tickets/create', icon: Plus, label: 'Create Ticket', color: 'green' },
    { to: '/user/tickets', icon: FileText, label: 'My Tickets', color: 'purple' },
  ]

  const agentLinks = [
    { to: '/agent/dashboard', icon: Home, label: 'Dashboard', color: 'blue' },
    { to: '/agent/tickets', icon: Ticket, label: 'Assigned Tickets', color: 'orange' },
  ]

  const adminLinks = [
    { to: '/admin/dashboard', icon: Home, label: 'Dashboard', color: 'blue' },
    { to: '/admin/tickets', icon: Ticket, label: 'All Tickets', color: 'purple' },
    { to: '/admin/users', icon: Users, label: 'Users', color: 'green' },
    { to: '/admin/analytics', icon: BarChart3, label: 'Analytics', color: 'orange' },
  ]

  const getLinks = () => {
    if (user?.role === 'admin') return adminLinks
    if (user?.role === 'agent') return agentLinks
    return userLinks
  }

  const links = getLinks()

  return (
    <aside className="w-64 bg-white border-r border-gray-200 min-h-screen">
      <div className="p-4">
        <div className="mb-6 px-4 py-3 bg-gradient-to-r from-primary-50 to-primary-100 rounded-lg">
          <p className="text-xs font-semibold text-primary-600 uppercase tracking-wide">Navigation</p>
        </div>
        
        <nav className="space-y-1">
          {links.map((link) => {
            const Icon = link.icon
            const isActive = location.pathname === link.to
            
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all group ${
                  isActive
                    ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-md'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-primary-600'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? '' : 'group-hover:scale-110 transition-transform'}`} />
                <span className="font-medium">{link.label}</span>
                {isActive && (
                  <div className="ml-auto w-1.5 h-1.5 bg-white rounded-full"></div>
                )}
              </Link>
            )
          })}
        </nav>

        <div className="mt-8 px-4 py-4 bg-gradient-to-br from-primary-50 to-purple-50 rounded-lg border border-primary-100">
          <p className="text-xs font-semibold text-gray-700 mb-2">Need Help?</p>
          <p className="text-xs text-gray-600 mb-3">Check our documentation or contact support</p>
          <button className="w-full text-xs bg-white text-primary-600 px-3 py-2 rounded-lg hover:bg-primary-50 transition-colors font-medium">
            View Docs
          </button>
        </div>
      </div>
    </aside>
  )
}
