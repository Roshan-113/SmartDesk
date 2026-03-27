import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import DashboardLayout from '../../layouts/DashboardLayout'
import { ArrowLeft, Send, Clock, User } from 'lucide-react'

export default function TicketDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [comment, setComment] = useState('')

  // Mock data - replace with real API
  const ticket = {
    id: id,
    title: 'Login issue on mobile app',
    description: 'Users are unable to login using their credentials on the mobile application. The error message shows "Invalid credentials" even with correct information.',
    status: 'in-progress',
    priority: 'high',
    category: 'technical',
    createdAt: '2024-03-20 10:30 AM',
    updatedAt: '2024-03-20 02:15 PM',
    assignedTo: 'John Smith'
  }

  const comments = [
    { id: 1, author: 'Support Agent', text: 'We are investigating this issue.', timestamp: '2024-03-20 11:00 AM' },
    { id: 2, author: 'You', text: 'Thank you for the quick response!', timestamp: '2024-03-20 11:30 AM' },
  ]

  const handleAddComment = (e) => {
    e.preventDefault()
    console.log('Adding comment:', comment)
    setComment('')
  }

  return (
    <DashboardLayout>
      <div className="max-w-4xl space-y-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-800"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </button>

        <div className="card">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Ticket #{ticket.id}</h1>
              <p className="text-gray-600 mt-1">{ticket.title}</p>
            </div>
            <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
              {ticket.status}
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div>
              <p className="text-sm text-gray-600">Priority</p>
              <p className="font-semibold text-gray-800 capitalize">{ticket.priority}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Category</p>
              <p className="font-semibold text-gray-800 capitalize">{ticket.category}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Created</p>
              <p className="font-semibold text-gray-800">{ticket.createdAt}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Assigned To</p>
              <p className="font-semibold text-gray-800">{ticket.assignedTo}</p>
            </div>
          </div>

          <div className="border-t pt-6">
            <h3 className="font-semibold text-gray-800 mb-2">Description</h3>
            <p className="text-gray-700">{ticket.description}</p>
          </div>
        </div>

        <div className="card">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Comments</h2>
          <div className="space-y-4 mb-6">
            {comments.map((comment) => (
              <div key={comment.id} className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <User className="w-4 h-4 text-gray-600" />
                  <span className="font-semibold text-gray-800">{comment.author}</span>
                  <span className="text-sm text-gray-500">• {comment.timestamp}</span>
                </div>
                <p className="text-gray-700">{comment.text}</p>
              </div>
            ))}
          </div>

          <form onSubmit={handleAddComment} className="space-y-4">
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="input-field"
              rows="3"
              placeholder="Add a comment..."
              required
            />
            <button type="submit" className="btn-primary flex items-center space-x-2">
              <Send className="w-4 h-4" />
              <span>Add Comment</span>
            </button>
          </form>
        </div>
      </div>
    </DashboardLayout>
  )
}
