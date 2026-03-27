import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { LogOut, User, LayoutDashboard } from 'lucide-react'

export default function Navbar() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to={user?.role === 'admin' ? '/admin' : '/dashboard'} className="flex items-center space-x-2">
              <LayoutDashboard className="w-8 h-8 text-primary" />
              <span className="text-xl font-bold text-gray-800">TicketHub</span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-gray-700">
              <User className="w-5 h-5" />
              <span className="font-medium">{user?.name}</span>
              <span className="px-2 py-1 text-xs bg-primary text-white rounded-full">
                {user?.role}
              </span>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 text-gray-700 hover:text-red-600 transition-colors"
            >
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
