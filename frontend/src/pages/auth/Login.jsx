import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { authService } from '../../services/authService'
import SmartDeskLogo from '../../components/common/SmartDeskLogo'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { user, token } = await authService.login(email, password)
      localStorage.setItem('token', token)
      login(user)
      
      if (user.role === 'admin') navigate('/admin/dashboard')
      else if (user.role === 'agent') navigate('/agent/dashboard')
      else navigate('/user/dashboard')
    } catch (error) {
      console.error('Login failed:', error)
    }
  }

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Blue Welcome Section */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 relative overflow-hidden">
        {/* Wavy Edge */}
        <div className="absolute right-0 top-0 bottom-0 w-32">
          <svg className="h-full w-full" viewBox="0 0 100 1000" preserveAspectRatio="none">
            <path d="M0,0 Q50,50 0,100 T0,200 T0,300 T0,400 T0,500 T0,600 T0,700 T0,800 T0,900 T0,1000 L100,1000 L100,0 Z" 
                  fill="white" opacity="0.1"/>
            <path d="M20,0 Q70,50 20,100 T20,200 T20,300 T20,400 T20,500 T20,600 T20,700 T20,800 T20,900 T20,1000 L100,1000 L100,0 Z" 
                  fill="white" opacity="0.05"/>
          </svg>
        </div>

        {/* Content */}
        <div className="flex flex-col items-center justify-center w-full px-12 relative z-10">
          <div className="text-center">
            <h2 className="text-5xl font-bold text-white mb-8">Welcome to</h2>
            
            {/* Logo */}
            <div className="flex justify-center mb-6">
              <div className="bg-white p-6 rounded-full shadow-2xl">
                <SmartDeskLogo size="w-32 h-32" />
              </div>
            </div>
            
            <h1 className="text-6xl font-black text-white mb-8">SmartDesk</h1>
            
            <p className="text-blue-100 text-lg max-w-md mx-auto leading-relaxed">
              Your intelligent support platform for managing tickets, tracking issues, and delivering exceptional customer service.
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Sign in to your account</h2>
            <p className="text-gray-500 mb-8">Enter your credentials to continue</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">E-mail Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-blue-600 outline-none transition-colors bg-transparent text-gray-800"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-blue-600 outline-none transition-colors bg-transparent text-gray-800"
                  placeholder="Enter your password"
                  required
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                  <span className="ml-2 text-sm text-gray-600">Remember me</span>
                </label>
                <Link to="/forgot-password" className="text-sm text-blue-600 hover:text-blue-800 font-semibold">Forgot Password?</Link>
              </div>

              <button 
                type="submit" 
                className="w-full bg-blue-600 text-white py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Sign In
              </button>

              <div className="text-center">
                <span className="text-gray-600">Don't have an account? </span>
                <Link to="/register" className="text-blue-600 hover:text-blue-800 font-semibold">Sign Up</Link>
              </div>
            </form>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200 text-xs text-gray-700">
              <p className="font-bold mb-1 text-blue-900">Demo Accounts:</p>
              <p className="font-semibold">user@example.com | agent@example.com | admin@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
