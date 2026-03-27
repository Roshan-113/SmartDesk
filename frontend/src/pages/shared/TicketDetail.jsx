import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import DashboardLayout from '../../components/layout/DashboardLayout'
import Badge from '../../components/ui/Badge'
import { ArrowLeft, Send, User } from 'lucide-react'
import { getStatusColor, getPriorityColor } from '../../utils/helpers'

export default function TicketDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [comment, setComment] = useState('')

  const ticket = {
    id: id,
    title: 'Login issue on mobile app',
    description: 'Users unable to login using credentials on mobile.',
    status: 'in-progress',
    priority: 'high',
    category: 'technical',
    createdAt: '2024-03-20 10:30 AM',
    assignedTo: 'John Smith'
  }

  const comments = [
    { id: 1, author: 'Support Agent', text: 'Investigating this issue.', timestamp: '2024-03-20 11:00 AM' },
  ]

  const handleAddComment = (e) => {
    e.preventDefault()
    console.log('Adding comment:', comment)
    setComment('')
  }

  return (
    <DashboardLayout>
      <div className="max-w-4xl space-y-6">
        <button onClick={() => navigate(-1)} className="flex items-center space-x-2 text-gray-600 hover:text-gray-800">
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </button>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Ticket #{ticket.id}</h1>
              <p className="text-gray-600 mt-1">{ticket.title}</p>
            </div>
            <Badge className={getStatusColor(ticket.status)}>{ticket.status}</Badge>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div>
              <p className="text-sm text-gray-600">Priority</p>
              <Badge className={getPriorityColor(ticket.priority)}>{ticket.priority}</Badge>
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

        <div className="bg-white rounded-lg shadow-md p-6">
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
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
              rows="3"
              placeholder="Add a comment..."
              required
            />
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center space-x-2">
              <Send className="w-4 h-4" />
              <span>Add Comment</span>
            </button>
          </form>
        </div>
      </div>
    </DashboardLayout>
  )
}
