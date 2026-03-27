import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { authService } from '../../services/authService'
import { LogIn } from 'lucide-react'
import '../../styles/auth.css'

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
    <div className="auth-container">
      <div className="auth-card">
        <div className="text-center mb-8">
          <div className="auth-icon mx-auto">
            <LogIn className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800">Welcome Back</h1>
          <p className="text-gray-600 mt-2">Sign in to your account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="auth-input"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="auth-input"
              placeholder="••••••••"
              required
            />
          </div>

          <button type="submit" className="auth-button">Sign In</button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <Link to="/register" className="text-blue-600 hover:underline font-medium">Sign up</Link>
          </p>
        </div>

        <div className="mt-4 p-3 bg-blue-50 rounded-lg text-xs text-gray-600">
          <p className="font-semibold mb-1">Demo: user@example.com | agent@example.com | admin@example.com</p>
        </div>
      </div>
    </div>
  )
}
