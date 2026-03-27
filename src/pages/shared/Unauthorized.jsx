import { Link } from 'react-router-dom'
import { ShieldAlert } from 'lucide-react'

export default function Unauthorized() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <ShieldAlert className="w-24 h-24 text-red-500 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Access Denied</h1>
        <p className="text-gray-600 mb-6">You don't have permission to access this page.</p>
        <Link to="/login" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          Go to Login
        </Link>
      </div>
    </div>
  )
}
