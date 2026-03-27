import { useState } from 'react'
import { Link } from 'react-router-dom'
import SmartDeskLogo from '../../components/common/SmartDeskLogo'
import { ArrowLeft } from 'lucide-react'

export default function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // TODO: Implement forgot password API call
    try {
      // Simulate API call
      console.log('Password reset email sent to:', email)
      setIsSubmitted(true)
    } catch (error) {
      console.error('Failed to send reset email:', error)
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

      {/* Right Side - Forgot Password Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            {!isSubmitted ? (
              <>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Forgot Password?</h2>
                <p className="text-gray-500 mb-8">Enter your email address and we'll send you a link to reset your password.</p>

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

                  <button 
                    type="submit" 
                    className="w-full bg-blue-600 text-white py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
                  >
                    Send Reset Link
                  </button>

                  <div className="text-center">
                    <Link to="/login" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold">
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Back to Sign In
                    </Link>
                  </div>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full">
                    <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                
                <h2 className="text-2xl font-bold text-gray-800 mb-3">Check Your Email</h2>
                <p className="text-gray-600 mb-6">
                  We've sent a password reset link to <span className="font-semibold text-gray-800">{email}</span>
                </p>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                  <p className="text-sm text-gray-700">
                    Didn't receive the email? Check your spam folder or{' '}
                    <button 
                      onClick={() => setIsSubmitted(false)} 
                      className="text-blue-600 hover:text-blue-800 font-semibold"
                    >
                      try again
                    </button>
                  </p>
                </div>

                <Link 
                  to="/login" 
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Sign In
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
