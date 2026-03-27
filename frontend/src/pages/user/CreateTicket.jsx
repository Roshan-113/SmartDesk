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
      <div className="max-w-3xl animate-fadeIn">
        <div className="page-header">
          <h1 className="page-title">Create New Ticket</h1>
          <p className="page-subtitle">Submit a service request or report an issue</p>
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
              placeholder="Brief description of the issue"
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
              placeholder="Provide detailed information about your request"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
          </div>

          <div className="flex space-x-4 pt-4">
            <Button type="submit" variant="primary" className="flex items-center space-x-2">
              <Send className="w-5 h-5" />
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
