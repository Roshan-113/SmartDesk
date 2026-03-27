import { useState } from 'react'
import DashboardLayout from '../../components/layout/DashboardLayout'
import SearchBar from '../../components/common/SearchBar'
import Button from '../../components/ui/Button'
import { UserPlus, Edit, Trash2 } from 'lucide-react'
import '../../styles/admin.css'

export default function UserManagement() {
  const [searchTerm, setSearchTerm] = useState('')

  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'user', tickets: 5, status: 'active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'user', tickets: 8, status: 'active' },
  ]

  return (
    <DashboardLayout>
      <div className="admin-container">
        <div className="flex items-center justify-between mb-6">
          <div className="admin-header">
            <h1 className="admin-title">User Management</h1>
            <p className="admin-subtitle">Manage system users and permissions</p>
          </div>
          <Button variant="primary" className="flex items-center space-x-2">
            <UserPlus className="w-4 h-4" />
            <span>Add User</span>
          </Button>
        </div>

        <div className="admin-card">
          <div className="mb-6">
            <SearchBar value={searchTerm} onChange={setSearchTerm} placeholder="Search users..." />
          </div>

          <div className="admin-table">
            <table className="w-full">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Tickets</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        user.role === 'admin' ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800'
                      }`}>
                        {user.role}
                      </span>
                    </td>
                    <td>{user.tickets}</td>
                    <td>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        user.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                      }`}>
                        {user.status}
                      </span>
                    </td>
                    <td>
                      <div className="flex space-x-2">
                        <button className="text-blue-600 hover:text-blue-800">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="text-red-600 hover:text-red-800">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
