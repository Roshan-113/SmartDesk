import { useState } from 'react'
import DashboardLayout from '../../components/layout/DashboardLayout'
import { Bell, Lock, Globe, Moon, Save } from 'lucide-react'

export default function Settings() {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: false,
    darkMode: false,
    language: 'en',
    twoFactor: false
  })

  const handleToggle = (key) => {
    setSettings({ ...settings, [key]: !settings[key] })
  }

  const handleSave = (e) => {
    e.preventDefault()
    alert('Settings saved successfully!')
  }

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto animate-fadeIn">
        <div className="page-header">
          <h1 className="page-title">Settings</h1>
          <p className="page-subtitle">Manage your account preferences</p>
        </div>

        <form onSubmit={handleSave} className="space-y-6">
          {/* Notifications */}
          <div className="card animate-slideUp">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-3 rounded-xl">
                <Bell className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">Notifications</h2>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-blue-50/30 rounded-xl">
                <div>
                  <p className="font-bold text-gray-900">Email Notifications</p>
                  <p className="text-sm text-gray-600">Receive email updates about your tickets</p>
                </div>
                <button
                  type="button"
                  onClick={() => handleToggle('emailNotifications')}
                  className={`relative w-14 h-7 rounded-full transition-colors ${
                    settings.emailNotifications ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                >
                  <span className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform ${
                    settings.emailNotifications ? 'transform translate-x-7' : ''
                  }`} />
                </button>
              </div>

              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-blue-50/30 rounded-xl">
                <div>
                  <p className="font-bold text-gray-900">Push Notifications</p>
                  <p className="text-sm text-gray-600">Get push notifications on your device</p>
                </div>
                <button
                  type="button"
                  onClick={() => handleToggle('pushNotifications')}
                  className={`relative w-14 h-7 rounded-full transition-colors ${
                    settings.pushNotifications ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                >
                  <span className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform ${
                    settings.pushNotifications ? 'transform translate-x-7' : ''
                  }`} />
                </button>
              </div>
            </div>
          </div>

          {/* Appearance */}
          <div className="card animate-slideUp" style={{ animationDelay: '100ms' }}>
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-3 rounded-xl">
                <Moon className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">Appearance</h2>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-purple-50/30 rounded-xl">
              <div>
                <p className="font-bold text-gray-900">Dark Mode</p>
                <p className="text-sm text-gray-600">Switch to dark theme</p>
              </div>
              <button
                type="button"
                onClick={() => handleToggle('darkMode')}
                className={`relative w-14 h-7 rounded-full transition-colors ${
                  settings.darkMode ? 'bg-purple-600' : 'bg-gray-300'
                }`}
              >
                <span className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform ${
                  settings.darkMode ? 'transform translate-x-7' : ''
                }`} />
              </button>
            </div>
          </div>

          {/* Security */}
          <div className="card animate-slideUp" style={{ animationDelay: '200ms' }}>
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-br from-red-600 to-rose-600 p-3 rounded-xl">
                <Lock className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">Security</h2>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-red-50/30 rounded-xl">
              <div>
                <p className="font-bold text-gray-900">Two-Factor Authentication</p>
                <p className="text-sm text-gray-600">Add an extra layer of security</p>
              </div>
              <button
                type="button"
                onClick={() => handleToggle('twoFactor')}
                className={`relative w-14 h-7 rounded-full transition-colors ${
                  settings.twoFactor ? 'bg-red-600' : 'bg-gray-300'
                }`}
              >
                <span className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform ${
                  settings.twoFactor ? 'transform translate-x-7' : ''
                }`} />
              </button>
            </div>
          </div>

          {/* Language */}
          <div className="card animate-slideUp" style={{ animationDelay: '300ms' }}>
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-br from-green-600 to-emerald-600 p-3 rounded-xl">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">Language</h2>
            </div>
            
            <select
              value={settings.language}
              onChange={(e) => setSettings({ ...settings, language: e.target.value })}
              className="input-field"
            >
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
            </select>
          </div>

          {/* Save Button */}
          <button type="submit" className="btn-primary flex items-center space-x-2">
            <Save className="w-5 h-5" />
            <span>Save Settings</span>
          </button>
        </form>
      </div>
    </DashboardLayout>
  )
}
