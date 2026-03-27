import DashboardLayout from '../../components/layout/DashboardLayout'
import { TrendingUp, Clock, CheckCircle, AlertCircle } from 'lucide-react'
import '../../styles/admin.css'

export default function Analytics() {
  return (
    <DashboardLayout>
      <div className="admin-container">
        <div className="admin-header">
          <h1 className="admin-title">Analytics & Reports</h1>
          <p className="admin-subtitle">Performance metrics and insights</p>
        </div>

        <div className="admin-grid">
          <div className="admin-card">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-blue-100 rounded-lg">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Tickets This Month</p>
                <p className="text-2xl font-bold text-gray-800">124</p>
                <p className="text-xs text-green-600">+12% from last month</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-green-100 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Resolution Rate</p>
                <p className="text-2xl font-bold text-gray-800">87%</p>
                <p className="text-xs text-green-600">+5% improvement</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-purple-100 rounded-lg">
                <Clock className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Avg Response Time</p>
                <p className="text-2xl font-bold text-gray-800">2.5h</p>
                <p className="text-xs text-red-600">-0.3h slower</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-orange-100 rounded-lg">
                <AlertCircle className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Open Tickets</p>
                <p className="text-2xl font-bold text-gray-800">32</p>
                <p className="text-xs text-orange-600">Needs attention</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="card">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Tickets by Priority</h2>
            <div className="space-y-4">
              {[
                { label: 'Urgent', value: 15, color: 'bg-red-500' },
                { label: 'High', value: 28, color: 'bg-orange-500' },
                { label: 'Medium', value: 45, color: 'bg-blue-500' },
                { label: 'Low', value: 36, color: 'bg-gray-500' },
              ].map((item) => (
                <div key={item.label}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">{item.label}</span>
                    <span className="text-sm text-gray-600">{item.value}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`${item.color} h-2 rounded-full`}
                      style={{ width: `${(item.value / 124) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Tickets by Category</h2>
            <div className="space-y-4">
              {[
                { label: 'Technical', value: 52, color: 'bg-blue-500' },
                { label: 'Billing', value: 28, color: 'bg-green-500' },
                { label: 'Feature Request', value: 24, color: 'bg-purple-500' },
                { label: 'Other', value: 20, color: 'bg-gray-500' },
              ].map((item) => (
                <div key={item.label}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">{item.label}</span>
                    <span className="text-sm text-gray-600">{item.value}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`${item.color} h-2 rounded-full`}
                      style={{ width: `${(item.value / 124) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="card">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Performance Trends</h2>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
            <p className="text-gray-500">Chart visualization would go here</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
