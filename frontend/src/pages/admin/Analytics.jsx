import { useEffect, useState } from 'react'
import DashboardLayout from '../../components/layout/DashboardLayout'
import { TrendingUp, Clock, CheckCircle, AlertCircle } from 'lucide-react'
import '../../styles/admin.css'

export default function Analytics() {

  const [stats, setStats] = useState({
    total: 0,
    resolved: 0,
    open: 0,
    avgResponseTime: '2.5h'
  })

  const [priorityData, setPriorityData] = useState([])
  const [categoryData, setCategoryData] = useState([])

  useEffect(() => {
    const tickets = JSON.parse(localStorage.getItem('tickets')) || []

    const total = tickets.length
    const resolved = tickets.filter(t => t.status === 'resolved').length
    const open = tickets.filter(t => t.status === 'open').length

    // Priority count
    const priorityCount = {
      urgent: 0,
      high: 0,
      medium: 0,
      low: 0
    }

    // Category count
    const categoryCount = {
      technical: 0,
      billing: 0,
      feature: 0,
      other: 0
    }

    tickets.forEach(ticket => {
      if (priorityCount[ticket.priority] !== undefined) {
        priorityCount[ticket.priority]++
      }

      if (categoryCount[ticket.category] !== undefined) {
        categoryCount[ticket.category]++
      }
    })

    setStats({
      total,
      resolved,
      open,
      avgResponseTime: '2.5h'
    })

    setPriorityData([
      { label: 'Urgent', value: priorityCount.urgent, color: 'bg-red-500' },
      { label: 'High', value: priorityCount.high, color: 'bg-orange-500' },
      { label: 'Medium', value: priorityCount.medium, color: 'bg-blue-500' },
      { label: 'Low', value: priorityCount.low, color: 'bg-gray-500' },
    ])

    setCategoryData([
      { label: 'Technical', value: categoryCount.technical, color: 'bg-blue-500' },
      { label: 'Billing', value: categoryCount.billing, color: 'bg-green-500' },
      { label: 'Feature Request', value: categoryCount.feature, color: 'bg-purple-500' },
      { label: 'Other', value: categoryCount.other, color: 'bg-gray-500' },
    ])

  }, [])

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
                <p className="text-2xl font-bold text-gray-800">{stats.total}</p>
                <p className="text-xs text-green-600">Live data</p>
              </div>
            </div>
          </div>

          <div className="admin-card">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-green-100 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Resolution Rate</p>
                <p className="text-2xl font-bold text-gray-800">
                  {stats.total ? Math.round((stats.resolved / stats.total) * 100) : 0}%
                </p>
                <p className="text-xs text-green-600">Auto calculated</p>
              </div>
            </div>
          </div>

          <div className="admin-card">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-purple-100 rounded-lg">
                <Clock className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Avg Response Time</p>
                <p className="text-2xl font-bold text-gray-800">{stats.avgResponseTime}</p>
                <p className="text-xs text-gray-500">Static for now</p>
              </div>
            </div>
          </div>

          <div className="admin-card">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-orange-100 rounded-lg">
                <AlertCircle className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Open Tickets</p>
                <p className="text-2xl font-bold text-gray-800">{stats.open}</p>
                <p className="text-xs text-orange-600">Needs attention</p>
              </div>
            </div>
          </div>
        </div>

        {/* PRIORITY */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="admin-card">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Tickets by Priority</h2>
            <div className="space-y-4">
              {priorityData.map((item) => (
                <div key={item.label}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">{item.label}</span>
                    <span className="text-sm text-gray-600">{item.value}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`${item.color} h-2 rounded-full`}
                      style={{ width: `${stats.total ? (item.value / stats.total) * 100 : 0}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CATEGORY */}
          <div className="admin-card">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Tickets by Category</h2>
            <div className="space-y-4">
              {categoryData.map((item) => (
                <div key={item.label}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">{item.label}</span>
                    <span className="text-sm text-gray-600">{item.value}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`${item.color} h-2 rounded-full`}
                      style={{ width: `${stats.total ? (item.value / stats.total) * 100 : 0}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="admin-card">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Performance Trends</h2>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
            <p className="text-gray-500">Chart visualization would go here</p>
          </div>
        </div>

      </div>
    </DashboardLayout>
  )
}