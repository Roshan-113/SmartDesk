import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import DashboardLayout from '../../components/layout/DashboardLayout'
import Button from '../../components/ui/Button'
import { Save, X } from 'lucide-react'
import '../../styles/admin.css'

export default function EditTicket() {
  const { id } = useParams()
  const navigate = useNavigate()
  
  const [formData, setFormData] = useState({
    title: 'Login issue on mobile app',
    description: 'Users unable to login using credentials on mobile.',
    priority: 'high',
    status: 'in-progress',
    category: 'technical',
    assignedTo: 'agent-1'
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Updating ticket:', formData)
    alert('Ticket updated successfully!')
    navigate('/admin/tickets')
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <DashboardLayout>
      <div className="max-w-3xl animate-fadeIn">
        <div className="page-header">
          <h1 className="page-title">Edit Ticket #{id}</h1>
          <p className="page-subtitle">Update ticket information and status</p>
        </div>

        <form onSubmit={handleSubmit} className="card space-y-6 animate-slideUp">
          <div>
            <label className="block text-sm font-bold text-gray-800 mb-2">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="input-field"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-800 mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="input-field resize-none"
              rows="6"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-gray-800 mb-2">
                Status
              </label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="input-field cursor-pointer"
              >
                <option value="open">Open</option>
                <option value="in-progress">In Progress</option>
                <option value="resolved">Resolved</option>
                <option value="closed">Closed</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-800 mb-2">
                Priority
              </label>
              <select
                name="priority"
                value={formData.priority}
                onChange={handleChange}
                className="input-field cursor-pointer"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
                <option value="urgent">Urgent</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-gray-800 mb-2">
                Category
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="input-field cursor-pointer"
              >
                <option value="technical">Technical Issue</option>
                <option value="billing">Billing</option>
                <option value="feature">Feature Request</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-800 mb-2">
                Assign To
              </label>
              <select
                name="assignedTo"
                value={formData.assignedTo}
                onChange={handleChange}
                className="input-field cursor-pointer"
              >
                <option value="">Unassigned</option>
                <option value="agent-1">Agent 1 - John Smith</option>
                <option value="agent-2">Agent 2 - Sarah Johnson</option>
                <option value="agent-3">Agent 3 - Mike Davis</option>
              </select>
            </div>
          </div>

          <div className="flex space-x-4 pt-4">
            <Button type="submit" variant="primary" className="flex items-center space-x-2">
              <Save className="w-5 h-5" />
              <span>Save Changes</span>
            </Button>
            <Button type="button" variant="secondary" onClick={() => navigate(-1)} className="flex items-center space-x-2">
              <X className="w-5 h-5" />
              <span>Cancel</span>
            </Button>
          </div>
        </form>
      </div>
    </DashboardLayout>
  )
}
