import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DashboardLayout from '../../components/layout/DashboardLayout'
import Button from '../../components/ui/Button'
import { Send } from 'lucide-react'
import { ticketService } from '../../services/ticketService'
import '../../styles/user.css'

export default function CreateTicket() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    priority: 'medium',
    category: 'technical',
    attachments: []
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await ticketService.createTicket(formData)
      alert('Ticket created successfully!')
      navigate('/user/tickets')
    } catch (error) {
      console.error('Error creating ticket:', error)
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <DashboardLayout>
      <div className="max-w-3xl">
        <div className="user-header">
          <h1 className="user-title">Create New Ticket</h1>
          <p className="user-subtitle">Submit a service request or report an issue</p>
        </div>

        <form onSubmit={handleSubmit} className="user-form space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="input-field"
              placeholder="Brief description of the issue"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="input-field"
              rows="6"
              placeholder="Provide detailed information about your request"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Priority
              </label>
              <select
                name="priority"
                value={formData.priority}
                onChange={handleChange}
                className="input-field"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
                <option value="urgent">Urgent</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="input-field"
              >
                <option value="technical">Technical Issue</option>
                <option value="billing">Billing</option>
                <option value="feature">Feature Request</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className="flex space-x-4">
            <Button type="submit" variant="primary" className="flex items-center space-x-2">
              <Send className="w-4 h-4" />
              <span>Submit Ticket</span>
            </Button>
            <Button type="button" variant="secondary" onClick={() => navigate('/user/dashboard')}>
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </DashboardLayout>
  )
}
