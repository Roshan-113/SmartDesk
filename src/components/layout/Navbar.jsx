import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { LogOut, User, Briefcase, Bell } from 'lucide-react'

export default function Navbar() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  const getDashboardLink = () => {
    if (user?.role === 'admin') return '/admin/dashboard'
    if (user?.role === 'agent') return '/agent/dashboard'
    return '/user/dashboard'
  }

  const getRoleBadgeColor = () => {
    if (user?.role === 'admin') return 'bg-gradient-to-r from-purple-600 to-purple-700'
    if (user?.role === 'agent') return 'bg-gradient-to-r from-blue-600 to-blue-700'
    return 'bg-gradient-to-r from-green-600 to-green-700'
  }

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to={getDashboardLink()} className="flex items-center space-x-3 group">
              <div className="bg-gradient-to-br from-primary-600 to-primary-700 p-2 rounded-lg shadow-md group-hover:shadow-lg transition-all">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                  SmartDesk
                </span>
                <p className="text-xs text-gray-500 -mt-1">Service Platform</p>
              </div>
            </Link>
          </div>

          <div className="flex items-center space-x-6">
            <button className="relative p-2 text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            <div className="flex items-center space-x-3 px-4 py-2 bg-gray-50 rounded-lg">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
              <div className="hidden md:block">
                <p className="text-sm font-semibold text-gray-900">{user?.name}</p>
                <span className={`text-xs ${getRoleBadgeColor()} text-white px-2 py-0.5 rounded-full`}>
                  {user?.role}
                </span>
              </div>
            </div>

            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
            >
              <LogOut className="w-5 h-5" />
              <span className="hidden md:inline font-medium">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
