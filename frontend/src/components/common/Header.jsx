import { Bell, User, ChevronDown } from 'lucide-react'
import { useAuth } from '../../hooks/useAuth'
import { useState, useRef, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'

export default function Header() {
  const { user, logout } = useAuth()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [showNotifications, setShowNotifications] = useState(false)
  const dropdownRef = useRef(null)
  const notificationRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false)
      }
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setShowNotifications(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <header className="bg-white/80 backdrop-blur-lg shadow-md border-b-2 border-gray-100 sticky top-0 z-40 mb-8">
      <div className="px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Page Title - Will be dynamic based on route */}
          <div>
            <h1 className="text-2xl font-extrabold bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">
              Welcome back!
            </h1>
            <p className="text-sm text-gray-600 font-medium mt-1">
              Here's what's happening with your tickets today
            </p>
          </div>

          {/* Right Side: Notifications & Profile */}
          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <div className="relative" ref={notificationRef}>
              <button 
                onClick={() => setShowNotifications(!showNotifications)}
                className="relative p-3 bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 rounded-xl transition-all duration-300 border-2 border-transparent hover:border-blue-200 group"
              >
                <Bell className="w-5 h-5 text-gray-700 group-hover:text-blue-700" strokeWidth={2.5} />
                <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
              </button>

              {/* Notifications Dropdown */}
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border-2 border-blue-100 z-50 max-h-96 overflow-y-auto">
                  <div className="p-4 border-b border-gray-200">
                    <h3 className="font-bold text-gray-900">Notifications</h3>
                  </div>
                  <div className="divide-y divide-gray-100">
                    <div className="p-4 hover:bg-blue-50 cursor-pointer transition-colors">
                      <div className="flex items-start space-x-3">
                        <div className="bg-blue-100 p-2 rounded-lg">
                          <Bell className="w-4 h-4 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-gray-900">New ticket assigned</p>
                          <p className="text-xs text-gray-600 mt-1">You have been assigned a new support ticket</p>
                          <p className="text-xs text-gray-400 mt-1">2 minutes ago</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 hover:bg-blue-50 cursor-pointer transition-colors">
                      <div className="flex items-start space-x-3">
                        <div className="bg-green-100 p-2 rounded-lg">
                          <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-gray-900">Ticket resolved</p>
                          <p className="text-xs text-gray-600 mt-1">Ticket #1234 has been marked as resolved</p>
                          <p className="text-xs text-gray-400 mt-1">1 hour ago</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 hover:bg-blue-50 cursor-pointer transition-colors">
                      <div className="flex items-start space-x-3">
                        <div className="bg-purple-100 p-2 rounded-lg">
                          <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-gray-900">New comment</p>
                          <p className="text-xs text-gray-600 mt-1">Someone commented on your ticket</p>
                          <p className="text-xs text-gray-400 mt-1">3 hours ago</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 border-t border-gray-200 text-center">
                    <button className="text-sm text-blue-600 hover:text-blue-800 font-semibold">
                      View all notifications
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* User Profile with Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center space-x-3 bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-2.5 rounded-xl border-2 border-blue-100 hover:border-blue-300 transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-2 rounded-lg">
                  <User className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{user?.name}</p>
                </div>
                <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border-2 border-blue-100 py-2 z-50">
                  <Link
                    to="/profile"
                    onClick={() => setIsDropdownOpen(false)}
                    className="flex items-center space-x-3 px-4 py-3 hover:bg-blue-50 transition-colors duration-200"
                  >
                    <User className="w-4 h-4 text-blue-600" />
                    <span className="font-semibold text-gray-700">My Profile</span>
                  </Link>
                  <Link
                    to="/settings"
                    onClick={() => setIsDropdownOpen(false)}
                    className="flex items-center space-x-3 px-4 py-3 hover:bg-blue-50 transition-colors duration-200"
                  >
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="font-semibold text-gray-700">Settings</span>
                  </Link>
                  <div className="border-t border-gray-200 my-2"></div>
                  <button
                    onClick={handleLogout}
                    className="flex items-center space-x-3 px-4 py-3 hover:bg-red-50 transition-colors duration-200 w-full text-left"
                  >
                    <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    <span className="font-semibold text-red-600">Logout</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
