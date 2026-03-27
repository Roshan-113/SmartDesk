import { useState, useEffect } from 'react'
import DashboardLayout from '../../components/layout/DashboardLayout'
import SearchBar from '../../components/common/SearchBar'
import Button from '../../components/ui/Button'
import { UserPlus, Edit, Trash2 } from 'lucide-react'
import '../../styles/admin.css'

export default function UserManagement() {
  const [searchTerm, setSearchTerm] = useState('')
  const [users, setUsers] = useState([])

  // ✅ LOAD USERS FROM LOCALSTORAGE
  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || []
    setUsers(storedUsers)
  }, [])

  // ✅ ADD USER
  const handleAddUser = () => {
    const name = prompt("Enter user name")
    const email = prompt("Enter email")
    const role = prompt("Enter role (user/admin/agent)", "user")

    if (!name || !email) {
      alert("Name and Email are required")
      return
    }

    const newUser = {
      id: Date.now(),
      name,
      email,
      role: role || 'user',
      tickets: 0,
      status: 'active'
    }

    const updatedUsers = [...users, newUser]
    setUsers(updatedUsers)
    localStorage.setItem('users', JSON.stringify(updatedUsers))
  }

  // ✅ EDIT USER
  const handleEdit = (id) => {
    const userToEdit = users.find((u) => u.id === id)

    const name = prompt("Edit name", userToEdit.name)
    const email = prompt("Edit email", userToEdit.email)
    const role = prompt("Edit role (user/admin/agent)", userToEdit.role)
    const status = prompt("Edit status (active/inactive)", userToEdit.status)

    if (!name || !email) {
      alert("Name and Email are required")
      return
    }

    const updatedUsers = users.map((user) =>
      user.id === id
        ? { ...user, name, email, role, status }
        : user
    )

    setUsers(updatedUsers)
    localStorage.setItem('users', JSON.stringify(updatedUsers))
  }

  // ✅ DELETE USER
  const handleDelete = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id)
    setUsers(updatedUsers)
    localStorage.setItem('users', JSON.stringify(updatedUsers))
  }

  // ✅ FILTER USERS
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <DashboardLayout>
      <div className="admin-container">
        <div className="flex items-center justify-between mb-6">
          <div className="admin-header">
            <h1 className="admin-title">User Management</h1>
            <p className="admin-subtitle">Manage system users and permissions</p>
          </div>

          {/* ✅ ADD USER BUTTON FIXED */}
          <Button 
            variant="primary" 
            className="flex items-center space-x-2"
            onClick={handleAddUser}
          >
            <UserPlus className="w-4 h-4" />
            <span>Add User</span>
          </Button>
        </div>

        <div className="admin-card">
          <div className="mb-6">
            <SearchBar 
              value={searchTerm} 
              onChange={setSearchTerm} 
              placeholder="Search users..." 
            />
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
                {filteredUsers.map((user) => (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>

                    <td>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        user.role === 'admin'
                          ? 'bg-purple-100 text-purple-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {user.role}
                      </span>
                    </td>

                    <td>{user.tickets || 0}</td>

                    <td>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        user.status === 'active'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {user.status}
                      </span>
                    </td>

                    <td>
                      <div className="flex space-x-2">
                        
                        {/* ✅ EDIT BUTTON FIXED */}
                        <button 
                          onClick={() => handleEdit(user.id)}
                          className="text-blue-600 hover:text-blue-800"
                        >
                          <Edit className="w-4 h-4" />
                        </button>

                        {/* ✅ DELETE BUTTON FIXED */}
                        <button 
                          onClick={() => handleDelete(user.id)}
                          className="text-red-600 hover:text-red-800"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>

                      </div>
                    </td>
                  </tr>
                ))}

                {/* ✅ EMPTY STATE */}
                {filteredUsers.length === 0 && (
                  <tr>
                    <td colSpan="6" className="text-center py-6 text-gray-500">
                      No users found
                    </td>
                  </tr>
                )}

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}