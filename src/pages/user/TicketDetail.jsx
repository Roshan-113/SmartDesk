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
      <div className="max-w-4xl space-y-6 animate-fadeIn">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-white bg-white hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-800 border-2 border-gray-200 hover:border-gray-700 rounded-xl transition-all duration-300 font-semibold shadow-md hover:shadow-lg"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </button>

        <div className="card animate-slideUp">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h1 className="text-3xl font-extrabold bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">
                Ticket #{ticket.id}
              </h1>
              <p className="text-gray-700 mt-2 text-lg font-semibold">{ticket.title}</p>
            </div>
            <Badge className={getStatusColor(ticket.status)}>{ticket.status}</Badge>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6 p-4 bg-gradient-to-r from-gray-50 to-blue-50/50 rounded-xl border-2 border-gray-100">
            <div>
              <p className="text-xs text-gray-600 font-bold uppercase tracking-wider mb-2">Priority</p>
              <Badge className={getPriorityColor(ticket.priority)}>{ticket.priority}</Badge>
            </div>
            <div>
              <p className="text-xs text-gray-600 font-bold uppercase tracking-wider mb-2">Category</p>
              <p className="font-bold text-gray-800 capitalize text-sm">{ticket.category}</p>
            </div>
            <div>
              <p className="text-xs text-gray-600 font-bold uppercase tracking-wider mb-2">Created</p>
              <p className="font-bold text-gray-800 text-sm">{ticket.createdAt}</p>
            </div>
            <div>
              <p className="text-xs text-gray-600 font-bold uppercase tracking-wider mb-2">Assigned To</p>
              <p className="font-bold text-gray-800 text-sm">{ticket.assignedTo}</p>
            </div>
          </div>

          <div className="border-t-2 border-gray-100 pt-6">
            <h3 className="font-bold text-gray-900 mb-3 text-lg">Description</h3>
            <p className="text-gray-700 leading-relaxed font-medium">{ticket.description}</p>
          </div>
        </div>

        <div className="card animate-slideUp" style={{ animationDelay: '100ms' }}>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent mb-6">Comments & Updates</h2>
          <div className="space-y-4 mb-6">
            {comments.map((comment, index) => (
              <div key={comment.id} className="bg-gradient-to-r from-gray-50 to-blue-50/30 rounded-xl p-5 border-2 border-gray-100 hover:border-blue-200 transition-all shadow-sm hover:shadow-md" style={{ animationDelay: `${index * 50}ms` }}>
                <div className="flex items-center space-x-3 mb-3">
                  <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-2 rounded-lg">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-bold text-gray-900">{comment.author}</span>
                  <span className="text-sm text-gray-500 font-medium">• {comment.timestamp}</span>
                </div>
                <p className="text-gray-700 font-medium ml-11">{comment.text}</p>
              </div>
            ))}
          </div>

          <form onSubmit={handleAddComment} className="space-y-4 p-5 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border-2 border-blue-100">
            <label className="block text-sm font-bold text-gray-800 mb-2">Add Your Comment</label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="input-field"
              rows="4"
              placeholder="Share your thoughts or updates..."
              required
            />
            <button type="submit" className="btn-primary flex items-center space-x-2">
              <Send className="w-5 h-5" />
              <span>Post Comment</span>
            </button>
          </form>
        </div>
      </div>
    </DashboardLayout>
  )
}
