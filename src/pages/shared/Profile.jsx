import { useState } from 'react'
import DashboardLayout from '../../components/layout/DashboardLayout'
import { User, Mail, Phone, MapPin, Calendar, Save } from 'lucide-react'
import { useAuth } from '../../hooks/useAuth'

export default function Profile() {
  const { user } = useAuth()
  const [formData, setFormData] = useState({
    name: user?.name || 'John Doe',
    email: user?.email || 'john@example.com',
    phone: '+1 234 567 8900',
    location: 'New York, USA',
    bio: 'Passionate about solving customer problems and delivering excellent service.'
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Profile updated successfully!')
  }

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto animate-fadeIn">
        <div className="page-header">
          <h1 className="page-title">My Profile</h1>
          <p className="page-subtitle">Manage your personal information</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Card */}
          <div className="card text-center animate-slideUp">
            <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full mb-4 mx-auto">
              <User className="w-16 h-16 text-white" strokeWidth={2} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{formData.name}</h2>
            <p className="text-gray-600 font-medium mb-4 capitalize">{user?.role}</p>
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-600 mb-2">
              <Mail className="w-4 h-4" />
              <span>{formData.email}</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
              <Calendar className="w-4 h-4" />
              <span>Joined March 2024</span>
            </div>
          </div>

          {/* Edit Form */}
          <div className="lg:col-span-2 card animate-slideUp" style={{ animationDelay: '100ms' }}>
            <h3 className="text-xl font-bold text-gray-900 mb-6">Edit Profile</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-800 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="input-field pl-12"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-800 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="input-field pl-12"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-800 mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="input-field pl-12"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-800 mb-2">
                  Location
                </label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="input-field pl-12"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-800 mb-2">
                  Bio
                </label>
                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  className="input-field resize-none"
                  rows="4"
                />
              </div>

              <button type="submit" className="btn-primary flex items-center space-x-2">
                <Save className="w-5 h-5" />
                <span>Save Changes</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
