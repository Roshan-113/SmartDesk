import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { authService } from '../../services/authService'
import SmartDeskLogo from '../../components/common/SmartDeskLogo'

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [agreeTerms, setAgreeTerms] = useState(false)
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match')
      return
    }

    if (!agreeTerms) {
      alert('Please agree to Terms & Conditions')
      return
    }
    
    try {
      const { user, token } = await authService.register(formData)
      localStorage.setItem('token', token)
      login(user)
      navigate('/user/dashboard')
    } catch (error) {
      console.error('Registration failed:', error)
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
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

      {/* Right Side - Register Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Create your account</h2>
            <p className="text-gray-500 mb-8">Join SmartDesk today</p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-blue-600 outline-none transition-colors bg-transparent text-gray-800"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">E-mail Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-blue-600 outline-none transition-colors bg-transparent text-gray-800"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-blue-600 outline-none transition-colors bg-transparent text-gray-800"
                  placeholder="Enter your password"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-blue-600 outline-none transition-colors bg-transparent text-gray-800"
                  placeholder="Confirm your password"
                  required
                />
              </div>

              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" 
                />
                <span className="ml-2 text-sm text-gray-600">
                  Signing up, I agree with <a href="#" className="text-blue-600 hover:text-blue-800 font-semibold">Terms & Conditions</a>
                </span>
              </div>

              <button 
                type="submit" 
                className="w-full bg-blue-600 text-white py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Sign Up
              </button>

              <div className="text-center">
                <span className="text-gray-600">Already have an account? </span>
                <Link to="/login" className="text-blue-600 hover:text-blue-800 font-semibold">Sign In</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
