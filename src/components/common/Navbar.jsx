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
    <nav className="bg-white/80 backdrop-blur-lg shadow-lg border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to={user?.role === 'admin' ? '/admin' : '/dashboard'} className="flex items-center space-x-3 group">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-2.5 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <LayoutDashboard className="w-7 h-7 text-white" />
              </div>
              <span className="text-2xl font-extrabold bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent">TicketHub</span>
            </Link>
          </div>

          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-3 bg-gradient-to-r from-blue-50 to-indigo-50 px-5 py-2.5 rounded-xl border border-blue-100">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-1.5 rounded-lg">
                <User className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold text-gray-800">{user?.name}</span>
              <span className="px-3 py-1 text-xs font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full shadow-md uppercase tracking-wide">
                {user?.role}
              </span>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 px-4 py-2.5 text-gray-700 hover:text-white bg-white hover:bg-gradient-to-r hover:from-red-600 hover:to-red-700 border-2 border-gray-200 hover:border-red-600 rounded-xl transition-all duration-300 font-semibold shadow-md hover:shadow-lg"
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
